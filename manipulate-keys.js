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

const reduceKeys = (obj, func, acc) => {
    let i = 0

    for (let key in obj) {
        if ((acc === undefined) && i === 0) {
            acc = key
        }else {
            acc = func(acc, key)
        }
        i++
    }
    return acc
}