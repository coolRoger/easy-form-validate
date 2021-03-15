require("babel-polyfill");

const validate = require("../lib/index").default;

// try {
//     if (window) {
//         window.EasyFormValidate = validate;
//     } else if (global) {
//         global.EasyFormValidate = validate;
//     }
// } catch (err) {
//     global.EasyFormValidate = validate;
// }

try{
    window ? window.EasyFormValidate = validate : global.EasyFormValidate = validate;
}catch(err){
    global.EasyFormValidate = validate;
}


