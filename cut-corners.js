function round(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] -= 0.5
            arr[i] = parseInt(arr[i])
        }else {
            arr[i] += 0.5
            arr[i] = parseInt(arr[i])
        }
    }
    return arr
}

function ceil(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] += 1
            arr[i] = parseInt(arr[i])
        }else {
            arr[i] = parseInt(arr[i])
        }
    }
    return arr
}

function floor(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] -= 1
            arr[i] = parseInt(arr[i])
        }else {
            arr[i] = parseInt(arr[i])
        }
    }
    return arr
}

function trunc(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    return arr
}
