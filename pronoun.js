const pronoun = (str) => {
    let obj = {};
    let regex = /\b(i|you|he|she|it|they|we)\b/gi;
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(regex)) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = { word: [], count: 1 };
            }else {
                obj[arr[i]].count++
            }
            if (i + 1 < arr.length && !arr[i + 1].match(regex)) {
                obj[arr[i]].word.push(arr[i + 1]);
            }
        }
    }

    return obj;
}