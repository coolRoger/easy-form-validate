declare class EasyFormValidate {
    rules: Types.ruleObject;
    messages: Types.messageObject;
    formObj: object;
    constructor(rules: Types.ruleObject, messages: Types.messageObject, formObj: object);
    validate(): Types.successCallback | Types.errorCallback;
}
export default EasyFormValidate;
