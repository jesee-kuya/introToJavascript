function RNA(str) {
    let s = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            s += 'C'
        }else if (str[i] === 'C') {
            s += 'G'
        }else if (str[i] === 'T') {
            s += 'A'
        }else if (str[i] === 'A') {
            s += 'U'
        }
    }
    return s
}

function DNA(str) {
    let s = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            s += 'G'
        }else if (str[i] === 'G') {
            s += 'C'
        }else if (str[i] === 'A') {
            s += 'T'
        }else if (str[i] === 'U') {
            s += 'A'
        }
    }
    return s
}