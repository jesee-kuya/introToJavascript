const forEach = (arr, func) => {
    let arr1 = []
    for (let i = 0 ; i < arr.length; i++){
       arr1.push(func(arr[i]))
    }
    return arr1
}