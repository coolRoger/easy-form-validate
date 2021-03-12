require("babel-polyfill");

const validate = require("../src/easy-form-validate");

if(window){
    window.EasyFormValidate = validate;
}else if(global){
    global.EasyFormValidate = validate;
}


