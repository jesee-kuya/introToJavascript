const filterShortStateName = (arr) => {
    return arr.filter((x) => x.length < 7)
}
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(filterShortStateName(words))