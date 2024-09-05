const filter = (arr, func) => {
    let arr1 = []
    for (let i = 0 ; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

const reject = (arr, func) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i ++) {
        if (!(func(arr[i], i, arr))) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

const partition = (arr, func) => {
    let a = []
    let arr1 = filter(arr, func)
    let arr2 = filter(arr, func)
    a[0].push(arr1)
    a[1].push(arr2)
    return a
}

