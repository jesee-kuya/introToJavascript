function vowelDots(str) {
    const vowels = /[aeiouAEIOU]/;

    return str.replace(vowels, (match) => match + '.')
}