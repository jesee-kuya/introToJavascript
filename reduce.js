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
    accumulator = arr[0]
    for (let i = 1; i < arr.length; i++) {
        accumulator = func(arr[i], i, arr)
    }
    return accumulator
    
}

const reduceRight = (arr, func, accumulator) => {
    if (!(arr instanceof Array && func instanceof Function)){
        return 'Error'
    }
    if (arr.length < 1) {
        return 'Error'
    }
    
    accumulator = arr[arr.length-1]
    for (let i = arr.length-2; i >= 0 ; i--) {
        accumulator = func(arr[i], i, arr)
    }
    return accumulator
}