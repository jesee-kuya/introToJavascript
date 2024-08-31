function letterSpaceNumber(str) {
    let a = str.match(/\w\s\d\b/gi);
    return a !== null ? a : [];
}

console.log(letterSpaceNumber('example 1, example 20'))
