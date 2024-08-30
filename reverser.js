function reverse(arr) {
    let n = []
    for (let i = arr.length; i >= 0; i--) {
        if (arr instanceof Array) {
            n.push(arr[i])
        }else {
            n += arr[i]
        }
    }
    return n
}