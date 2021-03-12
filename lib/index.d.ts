import "../typings/global.d";
declare class EasyFormValidate {
    rules: ruleObject;
    messages: messageObject;
    formObj: object;
    constructor(rules: ruleObject, messages: messageObject, formObj: object);
    validate(): any;
}
export default EasyFormValidate;
