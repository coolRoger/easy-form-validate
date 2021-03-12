import "../typings/global.d";

import { d_rules, d_messages } from "./default";

class EasyFormValidate{
    
    rules: ruleObject;
    messages: messageObject;
    formObj: object;

    constructor(rules: ruleObject, messages: messageObject, formObj: object){
        this.rules = rules;
        this.messages = messages;
        this.formObj = formObj;
    };

    validate():any{
        let rules = d_rules;
        let messages = d_messages;
    }
};

export default EasyFormValidate;
