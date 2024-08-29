function multiply(a,b) {
    let neg = true;
    if (a < 0 && b < 0) {
        neg = false;
    }else if (a < 0 || b < 0) {
        neg = true;
    }
    let n1 = Math.abs(a);
    let n2 = Math.abs(b);
    let num = 0;

    while (n2 !== 0) {
        num += n1;
        n2--;
    }
    return neg? -num : num;
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