const defaultCurry = (obj1) => {
    return function(obj2) {
        return {...obj1, ...obj2}
    }
}

const mapCurry = (func) => {
    return function(obj1) {
        let n = {}
        for (let key in obj1) {
            let k, v = func(key, obj1[key]);
            n[k] = v
        }
        return n
    }
}