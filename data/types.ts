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