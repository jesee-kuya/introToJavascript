function multiply(a,b) {
    let num = 0
    while (b !== 0) {
        num += a
        b--
    }
    return num
}

function divide(a,b) {
    if (a <= 0 || b <= 0) {
        return 0
    }
    let num = 0
    let count = 0

    while (num < a) {
        num += b
        count++
    }
    return count
}

function modulo(a,b) {
    if (a <= 0 || b <= 0) {
        return 0
    }
    let num = 0

    while (num < a) {
        num += b
    }
    num -= b
    return a - num
}