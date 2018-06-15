import { successOutPut } from "./resultOutPut";

function resultCheck(results) {
    console.log(results);
    let errorList = [];
    results.forEach(result => {
        for (let prop in result.outcome) {
            let outcome = result.outcome[prop];
            if (outcome.status === false) {
                let errObj = Object.assign(
                    { field: result.field, type: prop },
                    outcome
                );
                errorList.push(errObj);
            }
        }
    });

    if (errorList.length === 0) {
        return successOutPut();
    } else {
        return errorList[0];
    }
}

export default resultCheck;
