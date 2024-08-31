function sameAmount(str, reg1, reg2) {
    let re1 = new RegExp(reg1, "gi");
    let re2 = new RegExp(reg2, "gi");

    let str1 = str.match(re1);
    let str2 = str.match(re2);

    let len1 = (str1) => str1.length === 0? 0 : str1.length;
    let len2 = (str2) => str2.length === 0? 0 : str2.length;

    return len1 === len2
}