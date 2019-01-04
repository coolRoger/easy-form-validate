# Form-Validate

> A library that can validate form in different platform.

## Install

```sh
npm install easy-form-validate
``` 

## Usage

### Via Older Broweser

**index.html**

```html
<head>
    <script src="/dist/easy-form-validate.shim.js"></script>
    <script>
        var EasyFormValidate = window.EasyFormValidate;
        var validate = new EasyFormValidate(rules, messages, formObj).validate();
        console.log(validate);
    </script>
</head>
```

### ES6

```javascript
import EasyFormValidate from "easy-form-validate";

new EasyFormValidate(rules, messages, formObj).validate();
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

var formPassed = new EasyFormValidate(rules, messages, form).validate();

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
check out them in this project via **src/default.js**, `but don't edit this file directly, use your own rules variable to overwrite them!`
* Checkout the **demo/index.html**, it shows the way how to use validate in DOM/jQuery.

