const pronoun = (str) => {
    let obj = {};
    let regex = /\b(i|you|he|she|it|they|we)\b/gi;
    let arr = str.split(/\s+/); // Split by any whitespace (including newlines)

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase(); // Normalize to lowercase
        if (word.match(regex)) {
            if (!obj[word]) {
                obj[word] = { word: [], count: 1 };
            } else {
                obj[word].count++;
            }
            // Check if the next word exists and is not a pronoun
            if (i + 1 < arr.length) {
                let nextWord = arr[i + 1].replace(/[^\w\s]/g, ''); // Remove punctuation
                if (!nextWord.match(regex)) {
                    obj[word].word.push(nextWord);
                }
            }
        }
    }

    return obj;
}