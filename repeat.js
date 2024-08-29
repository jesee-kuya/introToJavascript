function repeat(str, n) {
    let w = ''
    while (n !== 0) {
        if (w === '') {
            w += str
        }else {
            w = w + ' ' + str
        }
        n--
    }
    return w
}