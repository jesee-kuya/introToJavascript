const filterValues = (obj, func) => {
    let n = {}
    for (let key in obj)  {
        if (func(obj[key])) {
            n[key] = obj[key]
        }
    }
    return n
}

const mapValues = (obj, func) => {
    let n = {}

    for (let key in obj) {
        n[key] = func(obj[key])
    }
    return n
}

const reduceValues = (obj, func, acc) => {
    if (acc === undefined) {
        acc = 0
    }

    for (let key in obj) {
        acc = func(acc, obj[key])
    }
    return acc
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
