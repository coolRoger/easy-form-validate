# Form-Validate

> A library that can validate form in different platform.

<!-- ## Install

```sh
npm install --save-dev babel-preset-latest
``` -->

## Usage

### Via Older Broweser

**index.html**

```html
<head>
    <script src="/dist/form-validate.shim.js"></script>
    <script>
        window.validate(rules, messages, formObj);
    </script>
</head>
```

### ES6

```javascript
import validate from "form-validate";

validate(rules, messages, formObj);
```

### QuickStart

```javascript
var rules = {
    password: {
        required: true,
    },
    email: {
        required: true,
    }
};

var messages = {
    password: {
        required: "Password can not be empty"
    },
    email: {
        required: "Email can not be empty"
    }
}

/* Mock Form: */

var form = {
    password: "Abcd1234",
    email: "roger_liao@hotmail.com"
}

/* Validate Form: */

var formPassed = validate(rules, messages, form);

console.log(formPassed);

/**
* Output: {Object}
  Example: {
      passed: {"status":true,"message":"验证通过"},
      failed: {"field":"email","type":"required","status":false,"message":"Email不能为空"}
  }
*/

```

## Notes:

* In this library, some fields have default rules and messages preset,
check out them in this project via **src/default.js**, 
<p color="red">buts dont edit this file directly, use your own rules variable to overwrite them!</p>

