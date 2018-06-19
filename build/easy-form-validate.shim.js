import "babel-polyfill";

import validate from "../src/easy-form-validate";

if(window){
    window.validate = validate;
}else if(global){
    global.validate = validate;
}


