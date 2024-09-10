const filterEntries = (obj, func) => {
    let n = {};

    for (let key in obj) {
        if (func([key, obj[key]])) {
            n[key] = obj[key];
        }
    }
    return n
}

const mapEntries = (obj, func) => {
    let arr = []
    let entries = Object.entries(obj)

    for (let i = 0 ; i < entries.length; i++) {
        arr.push(func(entries[i]))
    }
    return Object.fromEntries(arr)
}

