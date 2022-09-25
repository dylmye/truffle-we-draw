import { gql } from "https://tfl.dev/@truffle/api@~0.1.0/client.ts";

/** Retrieve a list of active forms. For now there's no filtering, so just retrieve all the endTimes.
 * @see https://truffle-labs.notion.site/Form-924308c3335145fa800f4c1a5def3dd7#6039dfe2ecdf43ffb33a27e7b0d3b9f8
 */
export const ACTIVE_FORMS_POLL_QUERY = gql`
query ActiveFormsPollingQuery {
  formConnection(first: 10000) {
    nodes {
      endTime
    }
  }
}
`;

/** Retrieve a list of active forms. There is no pagination for FormConnection.
 * @see https://truffle-labs.notion.site/Form-924308c3335145fa800f4c1a5def3dd7#6039dfe2ecdf43ffb33a27e7b0d3b9f8
 */
export const FORMS_CONNECTION_QUERY = gql`
  query FormsConnectionQuery {
    formConnection(first: 10000) {
      nodes {
        id
        name
        slug
        data
        endTime,
        formQuestionConnection {
          nodes {
            id,
            type
          }
        }
      }
    }
  }
`;

/** Get the questions and linked data for a specific form.
 * @see https://truffle-labs.notion.site/Form-924308c3335145fa800f4c1a5def3dd7#dfe252c3e31c49c1bf0af0157dc9c0ce
 */
export const READ_FORM_QUERY = gql`
  query FormQuery($input: FormInput!) {
    form(input: $input) {
      id
      orgId
      slug
      name
      data
      endTime
      formQuestionConnection {
        nodes {
          id
          question
        }
      }
      formResponseConnection(first: 1) {
        nodes {
          formQuestionAnswerConnection {
            nodes {
              value
            }
          }
        }
      }
    }
  }
`;

/** Fetch responses to a question. For retrieving current answer when refreshing and
 * checking eligibility for submitting an answer, as well as fetching all responses
 * @see https://truffle-labs.notion.site/FormResponse-788f236673cf42fab9beb4b837ed006d#33d5976be3064e0daa1f9a5a72e7ef5f
 */
export const READ_FORM_RESPONSES_QUERY = gql`
  query FormResponseConnection($input: FormResponseConnectionInput!) {
    formResponseConnection(input: $input) {
      nodes {
        id
        userId
        time
        formQuestionAnswerConnection {
          nodes {
            formQuestionId
            value
          }
        }
      }
    }
  }
`;

/** Create or update a form.
 * @see https://truffle-labs.notion.site/924308c3335145fa800f4c1a5def3dd7#0f63862b8fb74435b1d9d39db1f00ef4
 */
export const UPSERT_FORM_QUERY = gql`
  mutation FormUpsert($input: FormUpsertInput!) {
    formUpsert(input: $input) {
      form {
        id
        orgId
        name
        data
        maxResponsesPerUser
        endTime
      } 
    }
  }
`;

/** Add or update a form question.
 * @see https://truffle-labs.notion.site/FormQuestion-ec1cfb2f4b294a8691e0eb01bbfcd70e#2bbb8874eba344659571e10ab011d4a5
 */
export const UPSERT_FORM_QUESTION_QUERY = gql`
  mutation FormQuestionUpsert($input: FormQuestionUpsertInput!) {
    formQuestionUpsert(input: $input) {
      formQuestion {
        id
        formId
        question
        type
      }
    }
  }
`;

/**
 * Add or update a form response.
 * @see https://truffle-labs.notion.site/FormResponse-788f236673cf42fab9beb4b837ed006d#fdf5cd91aa954c42aa1d1d168864ff74
 */
export const UPSERT_FORM_ANSWER_QUERY = gql`
  mutation FormAnswerUpsert($input: FormResponseUpsertInput) {
    formResponseUpsert(input: $input) {
      formResponse {
        id
      }
    }
  }
`;