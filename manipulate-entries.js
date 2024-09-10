const filterEntries = (obj, func) => {
    let n = {};

    for (let key in obj) {
        if (func([key, obj[key]])) {
            n[key] = obj[key];
        }
    }
    return n
}