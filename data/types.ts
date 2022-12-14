// deno-lint-ignore-file no-explicit-any

export interface IPollResult {
    data: {
        poll: any;
        pollConnection?: {
            nodes: any[];
        };
    };
    extensions: {
        components: any;
    }
}

export interface Nodes<NodeType> {
    nodes: NodeType[];
}

export interface ActiveForm {
    formId?: string;
    questionId?: string;
    prompt?: string;
}

///////////////////////////
// Input Types
///////////////////////////

export interface FormInput {
    id?: string;
    slug?: string;
}

export interface FormResponseConnectionInput {
    formId?: string;
    orgId?: string;
    isMe?: boolean;
    userId?: string;
    minTime?: string;
    maxTime?: string;
}

export interface FormUpsertInput {
    id?: string;
    orgId?: string;
    name?: string;
    data?: Record<string, any>;
    description?: string;
    maxResponsesPerUser?: number;
    endTime?: string;
}

export interface FormQuestionUpsertInput {
    id?: string;
    formId?: string;
    question?: string;
    type?: 'shortText' | 'longText' | 'multipleChoice' | 'checkboxes' | 'dropdown' | 'imageUpload' | 'date' | 'time';
    data?: Record<string, any>;
    rank?: number;
}

export interface FormQuestionAnswerBatchUpsertRow {
    formQuestionId: string;
    value: any;
}

export interface FormResponseUpsertInput {
    id?: string;
    formId?: string;
    formQuestionAnswers?: FormQuestionAnswerBatchUpsertRow[];
    metadata?: any;
}

///////////////////////////
// Query Return Types
///////////////////////////

export interface ActiveFormResponse {
    id: string;
    slug: string;
    /** datetime: `YYYY-MM-DDTHH:MM:SS.sssZ` */
    endTime: string;
}

export interface Form {
    id: string;
    orgId: string;
    slug: string;
    name: string;
    data: Record<string, any>;
    description: string;
    maxResponsesPerUser: number;
    endTime: string;
    formQuestionConnection: Nodes<FormQuestionUpsertInput>;
    formResponseConnection: Nodes<FormResponseUpsertInput>;
}

export interface FormUpsertPayload {
    form: Form;
}