function reverse(arr) {
    let n = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr instanceof Array) {
            n.push(arr[i])
        }else {
            n += arr[i]
        }
    }
    return n
}