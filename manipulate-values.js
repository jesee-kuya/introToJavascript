const filterValues = (obj, func) => {
    let n = {}
    for (let key in obj)  {
        if (func(obj[key])) {
            n[key] = obj[key]
        }
    }
    return n
}