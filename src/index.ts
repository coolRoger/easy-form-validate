import { d_rules, d_messages } from "./default";

import { checkLength } from './functions/check';


class EasyFormValidate{
    
    rules: Types.ruleObject;
    messages: Types.messageObject;
    formObj: object;

    constructor(rules: Types.ruleObject, messages: Types.messageObject, formObj: object){
        this.rules = rules;
        this.messages = messages;
        this.formObj = formObj;
    };

    validate(): Types.successCallback | Types.errorCallback{
        let rules: Types.ruleObject = { ...d_rules, ...this.rules };
        let messages: Types.messageObject = { ...d_messages, ...this.messages };

        for(let key in rules){
            console.log(`${key}:`, rules[key]);

            let { required, regex, equalTo, min, max } = rules[key];

            let value = String(this.formObj[key]);

            let isRequired:boolean = required ? required : false;
            
            if(isRequired === true)
        }

        return {
            status: true,
            message: "验证通过"
        }
    }
};

export default EasyFormValidate;
