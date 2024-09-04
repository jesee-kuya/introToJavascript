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

const fahrenheitToCelsius = (arr) => {
    let arr1 = arr.map((x) => {
        let n = ''
        for (let i = 0; i < x.length; i++) {
            if (x[i] >= '0' && x[i] <= '9') {
                n += x[i]
            }
        }
        return String(Math.round((Number(n) - 32) * (5/9))) + '°C'
    })
    return arr1
}

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))
