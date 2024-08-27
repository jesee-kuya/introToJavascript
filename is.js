// is.num =function(n) {
//     if (typeof n == Number) {
//         return true
//     }else {
//         return false
//     }
// }

is.num = (n) => typeof n === "number";
is.nan = (n) => typeof n === "Nan";
is.str = (n) => typeof n === "string";
is.bool = (n) => typeof n === "boolean";
is.undef = (n) => typeof n == "undefined";
is.def = (n) => typeof n == "defined"
is.arr = (n) => typeof n == "array"
is.obj = (n) => typeof n == "object"
is.fun = (n) => typeof n == "function"
is.truthy = (n) => typeof n == "truthy"
is.falsy = (n) => typeof n == "falsy"



