import { readFile } from 'node:fs/promises';

const word = process.argv;
let fileName = word[2];
let content = ''

try {
    content = await readFile(fileName, 'utf8');
} catch (err) {
    console.log(err);
}

let arr = []
if (content) {
    arr = content.split(' ')
}

for (let i in arr) {
    let w = arr[i];
    let end = Math.ceil(w.length / 2);
    let first = w.slice(0, end);
    let last = w.slice(end);
    arr[i] = last + first;
}

console.log(arr.join(' '))
