function cutFirst(str) {
    if (str.length < 2) {
        return ''
    }

    let s = ''

    for (let i = 2 ; i < str.length; i++) {
        s += str[i]
    }

    return s
}

function cutLast(str) {
    if (str.length < 2) {
        return ''
    }

    let s = ''

    for (let i = 0 ; i < str.length - 2; i++) {
        s += str[i]
    }

    return s
}

function cutFirstLast(str) {
    let s = cutFirst(str)
    s = cutLast(s)
    return s
}

function keepFirst(str) {
    return str[0] + str[1]
}

function keepLast(str) {
    return str[str.length - 2] + str[str.length - 1]
}

function keepFirstLast(str) {
    let s = keepFirst(str)
    return s += keepLast(str)
}

console.log(keepFirstLast('l'))