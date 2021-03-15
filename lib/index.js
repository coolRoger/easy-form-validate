"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = require("./default");
var EasyFormValidate = /** @class */ (function () {
    function EasyFormValidate(rules, messages, formObj) {
        this.rules = rules;
        this.messages = messages;
        this.formObj = formObj;
    }
    ;
    EasyFormValidate.prototype.validate = function () {
        var rules = __assign(__assign({}, default_1.d_rules), this.rules);
        var messages = __assign(__assign({}, default_1.d_messages), this.messages);
        return {
            status: true,
            message: "验证通过"
        };
    };
    return EasyFormValidate;
}());
;
exports.default = EasyFormValidate;
