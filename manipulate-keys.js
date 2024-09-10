const filterKeys = (obj, func) => {
    let n = {}

    for (let key in obj) {
        if (func(key)) {
            n[key] = obj[key]
        }
    }
    return n
}