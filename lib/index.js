"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../typings/global.d");
var default_1 = require("./default");
var EasyFormValidate = /** @class */ (function () {
    function EasyFormValidate(rules, messages, formObj) {
        this.rules = rules;
        this.messages = messages;
        this.formObj = formObj;
    }
    ;
    EasyFormValidate.prototype.validate = function () {
        var rules = default_1.d_rules;
        var messages = default_1.d_messages;
    };
    return EasyFormValidate;
}());
;
exports.default = EasyFormValidate;
