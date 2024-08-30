function chunk(arr, n) {
    let a = []
    let s = ''
    let str = arr.join('')

    if (n <= 0) {
        return arr
    }

    for (let i = 0; i < str.length; i++){
        if (s.length === n) {
            a.push(s)
            s = ''
        }else {
            s += str[i]
        }
    }
    if (s !== '') {
        a.push(s)
        s = ''
    }
    return a
}