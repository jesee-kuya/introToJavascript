function sameAmount(str, reg1, reg2) {
    if (str === undefined || str === null ) {
        return false
    }
    let re1 = new RegExp(reg1, "g");
    let re2 = new RegExp(reg2, "g");

    let str1 = str.match(re1) || [];
    let str2 = str.match(re2) || [];

    return str1.length === str2.length
}

// console.log(sameAmount('hello how are you', /l/, /l/))
let data = null
console.log(sameAmount(data, /h/, /w/))