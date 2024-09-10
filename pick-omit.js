const pick = (obj, str) => {
    let val = Object.values(obj)
    let key = Object.keys(obj)
    let i = 0
    let n = {}

    for (let char of key) {
        if (typeof(str) === 'string' && String(char) === str) {
            n[String(char)] = val[i]
        }else {
            for (let v of str) {
                if (v ===  char) {
                    n[String(char)] = val[i]
                    break
                }
            }
        }
        i++
    }
    return n
}