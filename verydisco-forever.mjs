import { writeFile } from 'fs/promises';  // Adjusted import statement

const word = process.argv;
let str = word[2];
let arr = str.split(' ');

for (let i in arr) {
    let w = arr[i];
    let end = Math.ceil(w.length / 2);
    let first = w.slice(0, end);
    let last = w.slice(end);
    arr[i] = last + first;
}

try {
    await writeFile('verydisco-forever.txt', arr.join(' '));  // Use 'await' for the asynchronous writeFile function
} catch (err) {
    console.log(err);
}
