let user = {
    name : "pablo",
    password : undefined,
}

function removeUndefined(a) {
    let b = {};

    for (let key in a) {
        if (a[key] != undefined) {
            b[key] = a[key];
        }
    }
    return b;
}
console.log(removeUndefined(user));