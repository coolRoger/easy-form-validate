function combineOpt(obj, defaultObj) {
    if (typeof obj === "object" && typeof defaultObj === "object") {
        let obj_keys = Object.keys(obj);
        let defaultObj_keys = Object.keys(defaultObj);

        obj_keys.forEach((key)=>{
            let contained = defaultObj_keys.indexOf(key);
            if (contained === -1) {
                defaultObj[key] = obj[key];
            } else {
                let combined = Object.assign(
                    defaultObj[key],
                    obj[key]
                );
                defaultObj[key] = combined;
            }
        })
        
        return defaultObj;
    } else {
        return {};
    }
}

module.exports = combineOpt;
