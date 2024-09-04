const adder = (arr) => {
    let arr1 = arr.reduce((accumulater, value) => accumulater+value)
    return arr1
}

const array1 = [1, 2, 3, 4];
console.log(adder(array1))