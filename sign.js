function sign(n) {
    if (n > 0) {
        return 1
    }else if (n < 0) {
        return -1
    }else {
        return 0
    }
}

function sameSign(n,n1) {
    if (n > 0 && n1 > 0) {
        return true
    }else if (n < 0 && n1 < 0) {
        return true
    }else if (n == 0 && n1 == 0) {
        return true
    }else {
        return false
    }
}