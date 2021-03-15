declare namespace Types {
    export type ruleFieldObject = {
        min?: number,
        max?: number,
        required?: boolean,
        regex?: RegExp,
        equalTo?: string
    };

    export type messageFieldObject = {
        min?: string,
        max?: string,
        required?: string,
        regex?: string,
        equalTo?: string
    };

    export type ruleObject = { [key: string]: ruleFieldObject };

    export type messageObject = { [key: string]: messageFieldObject };

    export type resultCallback = {
        status: boolean,
        message: string
    };

    export type errorCallback = {
        status: boolean,
        summary: resultCallback,
        detail: resultCallback[]
    };

    export type successCallback = resultCallback;
}
