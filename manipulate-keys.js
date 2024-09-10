const filterKeys = (obj, func) => {
    let n = {}

    for (let key in obj) {
        if (func(key)) {
            n[key] = obj[key]
        }
    }
    return n
}

const mapKeys = (obj, func) => {
    let n = {}

    for (let key in obj) {
        let k = key
        key = func(key)
        n[key] = obj[k]
    }
    return n
}
