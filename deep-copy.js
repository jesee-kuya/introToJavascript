const deepCopy = (obj) => {
    let n = []
    if (obj instanceof Object) {
        n = {}
    }
    if (obj instanceof Array || obj instanceof Object) {
        for (let key in obj) {
            if (obj[key] instanceof Array) {
                n.push(deepCopy(obj[i]))
            }else if (obj[key] instanceof Object) {
                n[key] = (deepCopy(obj[key]))
            }else {
                if (n instanceof Array) {
                    n.push(obj[i])
                }else {
                    n[key] = obj[key]
                }
            }
        }
    }else {
        n = obj
    }
    return n
}