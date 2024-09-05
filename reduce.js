const fold = (arr, func, accumulator) => {
    let n = 0
    if (accumulator !== undefined) {
        n = accumulator
    }
    for (let i = 0 ; i < arr.length; i++) {
        n += (func(arr[i], i, arr))
    }
    return n
}

const foldRight = (arr, func, accumulator) => {
    let n = 0
    if (accumulator !== undefined) {
        n = accumulator
    }
    for (let i = arr.length - 1; i >= 0 ; i--) {
        n += (func(arr[i], i, arr))
    }
    return n
}