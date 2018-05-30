export function successOutPut() {
    let output = {
        status: true,
        message: "验证通过"
    };
    return output;
}

export function errorOutPut(obj, field, key) {
    let output = {
        status: false,
        message: obj[field]
            ? obj[field][key] || `${field}不合法`
            : `${field}不合法`
    };
    return output;
}
