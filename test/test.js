const EasyFormValidate = require("../lib/index").default;

var formPassed = new EasyFormValidate(
    {
        email: {
            required: true
        }
    },
    {
        email: {
            required: "Email shouldn't be empty"
        }
    },
    {
        email: "",
        password: "ABCDf"
    }
).validate();

console.log(formPassed);
