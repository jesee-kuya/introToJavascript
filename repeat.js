function repeat(str, n) {
    let w = ''
    while (n !== 0) {
        w += str
        n--
    }
    return w
}