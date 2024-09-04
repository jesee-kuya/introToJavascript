const filterShortStateName = (arr) => {
    return arr.filter((x) => x.length < 7)
}

const filterStartVowel = (arr) => {
    return arr.filter((x) => (x[0] === 'a' || x[0] === 'e'|| x[0] ==='i'|| x[0] ==='o'|| x[0] ==='u'))
}



const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(filterStartVowel(words))