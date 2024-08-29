const arrToSet = (n) => new Set(n);
const arrToStr = (n) => n.join('');
const setToArr = (n) => Array.from(n);
const setToStr = (n) => setToArr(n).join('');
const strToArr = (n) => [...n];
const strToSet = (n) => arrToSet(strToArr(n));
const mapToObj = (n) => Object.fromEntries(n.entries());
const objToArr = (n) => Object.values(n);
const objToMap = (n) => new Map(Object.entries(n));
const arrToObj = (n) => Object.assign({}, n);
const strToObj = (n) => arrToObj(strToArr(n));
function superTypeOf(n) {
    if (typeof n === undefined){
        return 'undefined';
    }else if (n === null) {
        return 'null';
    }else {
        return Object.prototype.toString.call(n).slice(8).slice(0, -1).toLowerCase();
    }
}