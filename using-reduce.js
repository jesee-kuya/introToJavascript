const adder = (arr, initial) => arr.reduce((accumulater, value) => accumulater+value,initial)

const sumOrMul = (arr, initial) => {
    let arr1 = arr.reduce((accumulater, value) => {
        if ((value % 2 === 0 && value !== 1)){
            if (initial !== undefined) {
                accumulater = initial
                initial = undefined
            }
            accumulater *= value
        } else {
            if (initial !== undefined) {
                accumulater = initial
                initial = undefined
            }
            accumulater += value
        }
        return accumulater   
    })
    return arr1
}


const funcExec = (arr) => {
    let arr1 = arr.reduce((accumulater, value) => accumulater + value)
}
const array1 = [0,1, 2, 3, 4];
console.log(sumOrMul(array1, 5))