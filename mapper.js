const map = (arr, func) => {
    let arr1 = []
    for (let i = 0 ; i < arr.length ; i++) {
        arr1.push(func(arr[i], i, arr))
    }
    return arr1
}

const flatMap = (arr, func) => {
    for (let i = 0; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}