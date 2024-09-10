const invert = (obj) => {
    let n = {}
    let val = Object.values(obj)
    let key = Object.keys(obj)
    let i = 0

    for (char of val) {
        n[String(char)] = key[i]
        i++
    }
    return n
}