const toNum = (n) => {
    let num = Math.abs(n)
    let count = 0

    for (let n = num;  n >= 1; n--) {
        count++
    }
    return count
}

function round(n) {
    let num = toNum(n)
    let neg = false

    if (n < 0) {
        n = -n
        neg = true
    }

    let point = n - num

    if (point >= 0.5) {
        num += 1
    }
    return neg ? -num : num
}

function ceil(n) {
    if (n === 0) {
        return 0
    }
    let num = toNum(n)
    let neg = false

    if (n < 0) {
        n = -n
        neg = true
    }

    return neg? -num : num + 1
}

function floor(n) {
    let num = toNum(n)
    let neg = false

    if (n < 0) {
        n = -n
        neg = true
    }

    return neg? -(num + 1) : num
}

function trunc(n) {
    let num = toNum(n)
    let neg = false

    if (n < 0) {
        neg = true
    }
    return neg? -num : num
}




