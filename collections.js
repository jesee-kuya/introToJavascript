const arrToSet = (n) => new Set(n);
const arrToStr = (n) => n.join('');
const setToArr = (n) => Array.from(n);
const setToStr = (n) => setToArr(n).join('');
const strToArr = (n) => [...n];
const strToSet = (n) => arrToSet(strToArr(n));
const mapToObj = (n) => Object.fromEntries(n.entries());
const objToArr = (n) => Array.from(n);
const objToMap = (n) => new Map(Object.entries(n));
const arrToObj = (n) => Object.assign({}, n);
const strToObj = (n) => arrToObj(strToArr(n));
function superTypeOf(n) {
    if (n instanceof Set){
        return 'Set';
    }else if (n instanceof Map) {
        return 'Map';
    }else if (n instanceof Array) {
        return 'Array';
    }else if (n === null) {
        return 'null';
    }else {
        return typeof n;
    }
}