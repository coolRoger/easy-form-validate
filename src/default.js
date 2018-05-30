export const defaultRules = {
    email: {
        regex: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g
        //required: true
    },
    number: {
        regex: /^\d+$/g,
        min: 4,
        max: 16
        //required: true
    },
    password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/g,
        min: 6,
        max: 16
        //required: true
    },
    comfirmPassword: {
        equalTo: "password"
    }
};

export const defaultMessages = {
    number: {
        regex: "请输入正确电话号码",
        required: "电话号码不能为空",
        min: "电话号码位数不能少于4",
        max: "电话号码位数不能多于16"
    },
    email: {
        regex: "请输入正确的邮箱格式",
        required: "邮箱不能为空"
    },
    password: {
        regex: "密码必须是同时包含大写字母和数字的组合",
        required: "密码不能为空",
        min: "密码不能少于6个字符",
        max: "密码不能多于16个字符"
    },
    comfirmPassword: {
        equalTo: "两次密码输入不一致"
    }
};
