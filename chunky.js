function chunk(arr, n) {
    let a = []
    let s = []

    if (n <= 0) {
        return arr
    }

    for (let i = 0; i < arr.length; i++){
        s.push(arr[i])
        if (s.length === n) {
            a.push(s)
            s = []
        }
    }
    if (s.length !== 0) {
        a.push(s)
        s = []
    }
    return a
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))