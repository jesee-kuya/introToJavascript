// function isPositive(n) {
//     if (n < 0) {
//         return false
//     }
//     return true
// }

const isPositive = (n) => n > 0 ? true : false;
const abs = (n,n1) => isPositive(n) > isPositive(n1) ? n - n1 : n1 - n
