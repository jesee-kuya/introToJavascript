function triangle(str, n) {
    let s = ''
    for (let i = 1; i <= n ; i++) {
        s += str.repeat(i) + '\n'
    }
    return s.slice(0, -1)
}
