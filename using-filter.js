const filterShortStateName = (arr) => {
    return arr.filter((x) => x.length < 7)
}

const filterStartVowel = (arr) => {
    return arr.filter((x) => (x[0] === 'a' || x[0] === 'e'|| x[0] ==='i'|| x[0] ==='o'|| x[0] ==='u'))
}

const filter5Vowels = (arr) => {
    let arr1 = arr.filter((x) => {
        let n = 0
        for (let i = 0; i < x.length; i++) {
            if (x[i] === 'a' || x[i] === 'e'|| x[i] ==='i'|| x[i] ==='o'|| x[i] ==='u') {
                n++
            }
        }
        return n >= 5 ? x : ''
    })
    return arr1
}

const filter1DistinctVowel = (arr) => {
    let arr1 = arr.filter((x) => {
        let n = []
        for (let i = 0; i < x.length; i++) {
            if (x[i] === 'a' || x[i] === 'e'|| x[i] ==='i'|| x[i] ==='o'|| x[i] ==='u') {
                n.push(x[i])
            }
        }
        let set = new Set(n)
        return set.size === 1? x : ''
    })
    return arr1
}
const words = ['spray', 'elite', 'exuberanta', 'destruction', 'present', "Alabama"];
console.log(filter1DistinctVowel(words))