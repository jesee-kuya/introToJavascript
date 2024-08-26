const escapeStr = "`\\/\"'"
const arr = [4,2]
const obj = {str : "jesee", num : 0, bool : 1 == 1, undef : undefined}
const nested = {
    arr :[4, undefined, '2'],
    obj : {
        str: "jesee",
        num: 0,
        bool: true,
    }

}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)