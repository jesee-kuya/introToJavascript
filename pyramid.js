function pyramid(str, n) {
    let s = "";
    let spaces = " ".repeat(str.length);
    for (var i = 1; i <= n; i++) {
        s += spaces.repeat(n - i) + str.repeat(2 * i - 1) + "\n";
    }
    return s.slice(0, -1);
}

console.log(pyramid('*',5))