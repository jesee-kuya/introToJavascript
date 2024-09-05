const atLeast5 = (str) => str.length >= 5;
const atLeast10 = (str) => str.length >= 10;
const short =(str) => str.length < 7;

const longWords = (arr) => arr.every(atLeast5);

const oneLongWord = (arr) => arr.some(atLeast10);
