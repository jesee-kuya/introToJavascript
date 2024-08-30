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
    let s = ''
    for (let i = 0; i < str.length; i++) {
        s += str[i]
        if (i === 1) {
            break
        }
    }
    return s
}

function keepLast(str) {
    let s = ''
    let count = 0
    for (let i = str.length - 1; i >= 0; i--) {
        count++
        s = str[i] + s
        if (count === 2) {
            break
        }
    }
    return s
}

function keepFirstLast(str) {
    let s = ''
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || i === 1 || i === str.length - 1 || i == str.length - 2) {
            s += str[i]
        }
    }
    return s
}