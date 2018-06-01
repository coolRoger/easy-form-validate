import combineOpt from "./combineOpt";

import { successOutPut, errorOutPut } from "./resultOutPut";

import resultCheck from "./resultCheck";

import { defaultRules, defaultMessages } from "./default";

const validate = function(customRules, customMessages, formObj) {
    let rules = combineOpt(customRules, defaultRules);
    let messages = combineOpt(customMessages, defaultMessages);
    let fields = Object.keys(rules);
    let results = [];
    fields.forEach(field => {
        let requiredField = rules[field].required || false;
        let requiredMin = rules[field].min || null;
        let requiredMax = rules[field].max || null;
        let requiredRegex = rules[field].regex || null;
        let requiredEqual = rules[field].equalTo || null;
        let fieldLength = formObj[field] ? formObj[field].length : 0;
        let fieldValue = formObj[field] || "";
        
        if(requiredField === true || fieldValue){

            function checkLength() {
                let res = successOutPut();
                if (requiredMax && requiredMax < fieldLength) {
                    res = errorOutPut(messages, field, "max");
                }
                if (requiredMin && requiredMin > fieldLength) {
                    res = errorOutPut(messages, field, "min");
                }
                if (!requiredMin && !requiredMax) {
                    res = successOutPut();
                }
                return res;
            }

            function checkValue() {
                let res = successOutPut();
                if (requiredRegex) {
                    let match = fieldValue.match(requiredRegex);
                    if (!match) {
                        res = errorOutPut(messages, field, "regex");
                    }
                } else {
                    res = successOutPut();
                }
                return res;
            }

            function checkRequire() {
                let res = successOutPut();
                if (requiredField === true && (!fieldValue || !fieldValue.length)) {
                    res = errorOutPut(messages, field, "required");
                } else {
                    res = successOutPut();
                }
                return res;
            }

            function checkEqual() {
                let res = successOutPut();
                if (requiredEqual) {
                    formObj[requiredEqual] === fieldValue
                        ? void 0
                        : (res = errorOutPut(messages, field, "equalTo"));
                }
                return res;
            }

            let analysis = {
                field: field,
                rules: rules[field],
                length: fieldLength,
                value: fieldValue,
                outcome: {
                    required: checkRequire(),
                    length: checkLength(),
                    value: checkValue(),
                    equal: checkEqual()
                }
            };

            results.push(analysis);
        }else{
            let analysis = {
                field: field,
                rules: rules[field],
                length: fieldLength,
                value: fieldValue,
                outcome: {
                    required: successOutPut(),
                    length: successOutPut(),
                    value: successOutPut(),
                    equal: successOutPut()
                }
            };
        }
    });

    return resultCheck(results);
};

export default validate;
