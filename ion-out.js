function ionOut(str) {
    const regex = /\b(\w+)tion\b/g;

    const result = [];

    str.replace(regex, (match, p1) => {
        result.push(p1 + 't');
        return match;
    });

    return result;
}