type ruleFieldObject = {
    min?: number,
    max?: number,
    required?: boolean,
    regex?: RegExp,
    equalTo?: string
};

type messageFieldObject = {
    min?: string,
    max?: string,
    required?: string,
    regex?: string,
    equalTo?: string
};

type ruleObject = { [key: string]: ruleFieldObject };

type messageObject = { [key: string]: messageFieldObject };
