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