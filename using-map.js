const citiesOnly = (arr) => {
    let a = []
    let arr1 = arr.map((x) => {
        a.push(x.city)
    })
    return a
}

const upperCasingStates = (arr) => {
    let arr1 = arr.map((x) => {
        let nArr = x.split('')
        nArr[0] = nArr[0].toUpperCase()
        for (let i = 0; i < nArr.length; i++) {
            if (nArr[i] === ' ') {
                nArr[i + 1] = nArr[i + 1].toUpperCase()
            }
        }
        return nArr.join('')
    })
    return arr1
}

console.log(upperCasingStates(['alabama', 'new jersey']))