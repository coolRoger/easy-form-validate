const validate = require('../src/easy-form-validate');

var formPassed = new validate(
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

console.log(JSON.stringify(formPassed));
