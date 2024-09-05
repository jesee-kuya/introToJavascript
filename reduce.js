const fold = (arr, func, accumulator) => {
    for (let i = 0 ; i < arr.length; i++) {
        accumulator = (func(arr[i], i, arr))
    }
    return accumulator
}

const foldRight = (arr, func, accumulator) => {
    for (let i = arr.length - 1; i >= 0 ; i--) {
        accumulator = (func(arr[i], i, arr))
    }
    return accumulator
}

const reduce = (arr, func, accumulator) => {
    if (!(arr instanceof Array && func instanceof Function)){
        return 'Error'
    }
    if (arr.length < 1) {
        return 'Error'
    }
    return fold(arr, func, accumulator)
}

const reduceRight = (arr, func, accumulator) => {
    if (!(arr instanceof Array && func instanceof Function)){
        return 'Error'
    }
    if (arr.length < 1) {
        return 'Error'
    }
    return foldRight(arr, func, accumulator)
}