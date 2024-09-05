const map = (arr, func) => {
    let arr1 = []
    for (let i = 0 ; i < arr.length ; i++) {
        arr1.push(func(arr[i], i, arr))
    }
    return arr1
}

const flatMap = (arr, func) => {
    let arr1 = []
    for (let i = 0 ; i < arr.length; i++) {
        let c = func(arr[i], i, arr)
        if (c instanceof Array) {
            arr1.push(...c) 
        }else {
            arr1.push(c)
        }
    }
    return arr1
}