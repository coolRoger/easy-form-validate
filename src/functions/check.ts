export function checkLength(field: Types.ruleFieldObject, value: string): Types.resultCallback {
    if (field.max && field.max < value.length) {
        return {
            status: false,
            message: "验证通过"
        }
    }

    if (field.min && field.min > value.length) {
        return {
            status: false,
            message: "验证通过"
        }
    }

    return {
        status: true,
        message: "验证通过"
    }
};

export const checkRegex = () => {

};

export const checkRequired = () => {

};

export const checkEqual = () => {

};
