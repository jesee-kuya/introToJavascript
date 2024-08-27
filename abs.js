// function isPositive(n) {
//     if (n < 0) {
//         return false
//     }
//     return true
// }

const isPositive = (n) => n > 0 ? true : false;
const abs = (n) => isPositive(n) ? n : n * -1  ;