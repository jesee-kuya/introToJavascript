function ionOut(str) {
        const regex = /\bt(\w*?)tion\b/g;

      const result = [];

        str.replace(regex, (match, p1) => {
        result.push(p1 + 't');
        return match; 
    });

    return result;
}

// const text = "The nation is in a transition phase of the situation and resolution.";
// console.log(ionOut(text));
