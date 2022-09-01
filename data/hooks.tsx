import React, { useCallback } from "https://npm.tfl.dev/react";
import { query, useMutation, useQuery } from "https://tfl.dev/@truffle/api@~0.1.0/client.ts";
import dayjs from "https://npm.tfl.dev/dayjs@1";
import {
  FORMS_CONNECTION_QUERY,
  READ_FORM_RESPONSES_QUERY,
  UPSERT_FORM_ANSWER_QUERY,
} from "./gql.ts";
import {
  Form,
  FormResponseConnectionInput,
  FormResponseUpsertInput,
  FormUpsertPayload,
} from "./types.ts";

/**
 * Get the most recent active form and its question ID.
 */
export const getActiveFormIds = async (): Promise<
  { formId?: string; questionId?: string }
> => {
  const { data, error } = await query(FORMS_CONNECTION_QUERY, {}).catch(console.error);

  if (error) {
    throw new Error(error);
  }

  // remove forms with no endDate and expired forms
  // then sort descending
  const allForms = (data?.formConnection?.nodes as Form[]).filter((x) =>
    (x.endTime !== null) && (dayjs(x.endTime).isAfter(dayjs()))
  ).sort((
    a,
    b,
  ) => dayjs(a.endTime).isAfter(b.endTime) ? -1 : dayjs(a.endTime).isSame(b.endTime) ? 0 : 1);

  if (allForms?.length) {
    return {
      formId: allForms[0]?.id,
    };
  }
  return {};
};

/**
 * Get all the responses to the form for the current user
 * @param formId The Form to get the responses for
 * @returns The array of responses
 */
export const getPreviousResponse = async (formId?: string): Promise<FormUpsertPayload[]> => {
  if (!formId) {
    return [];
  }
  const { data, error } = await query(
    READ_FORM_RESPONSES_QUERY,
    {
      input: {
        formId,
        isMe: true,
      } as FormResponseConnectionInput,
    },
  ).catch(console.error);

  if (error) {
    throw new Error(error);
  }

  return data?.nodes;
};

/**
 * Compress and submit the drawing to the given form
 * @param formId The form to submit the drawing to
 */
export const useSubmitDrawing = (
  formId?: string,
): (formQuestionId: string, dataUri: string) => any => {
  const [_, executeSubmitDrawingMutation] = useMutation(
    UPSERT_FORM_ANSWER_QUERY,
  );
  return useCallback((formQuestionId: string, dataUri: string) => {
    getPreviousResponse(formId).then((res) => {
      if (res.length) {
        console.warn(
          "[YOU REALLY THOUGHT] Didn't submit this answer because the user has already submitted an answer.",
        );
        return;
      }
    });
    // @ts-ignore ts(2349)
    const res = executeSubmitDrawingMutation({
      input: {
        formId,
        formQuestionAnswers: [
          {
            formQuestionId,
            value: dataUri,
          },
        ],
      } as FormResponseUpsertInput,
    });

    if (res?.error) {
      throw new Error(res?.error);
    }

    return res;
  }, []);
};
