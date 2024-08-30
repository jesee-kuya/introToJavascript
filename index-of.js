function indexOf(arr, val, n) {
    let i = 0;
    if (n !== undefined) {
        i = n;
    }
    
    let at;
    
    for (let ind = i; ind < arr.length; ind++) {
        if (arr[ind] === val) {
            at = ind;
            break;
        }
    }
    return at === undefined? -1 : at;
}

function lastIndexOf(arr, val, n) {
    let at;
    if (n !== undefined) {
        for (let ind = n; ind >= 0; ind--) {
            if (arr[ind] === val) {
                at = ind;
            }
        }
    }else {
        for (let ind = 0; ind < arr.length; ind++) {
            if (arr[ind] === val) {
                at = ind;
            }
        }
    }
    return at === undefined? -1 : at;
}

function includes(arr, val, n) {
    let i = 0;
    if (n !== undefined) {
        i = n;
    }
    
    for (let ind = i; ind < arr.length; ind++) {
        if (arr[ind] === val) {
            return true
        }
    }
    return false;
}

let t

console.log(lastIndexOf([t, 0, 0, t], t, 2))