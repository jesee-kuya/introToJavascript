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
}

