"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEqual = exports.checkRequired = exports.checkRegex = exports.checkLength = void 0;
function checkLength(field, value) {
    if (field.max && field.max < value.length) {
        return {
            status: false,
            message: "验证通过"
        };
    }
    if (field.min && field.min > value.length) {
        return {
            status: false,
            message: "验证通过"
        };
    }
    return {
        status: true,
        message: "验证通过"
    };
}
exports.checkLength = checkLength;
;
var checkRegex = function () {
};
exports.checkRegex = checkRegex;
var checkRequired = function () {
};
exports.checkRequired = checkRequired;
var checkEqual = function () {
};
exports.checkEqual = checkEqual;
