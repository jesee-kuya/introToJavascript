import { readdir } from 'node:fs/promises'
let path = process.argv[2]
if (path === undefined) {
    path = process.cwd()
}

try {
    let s = await readdir(path)
    console.log(s.length)
} catch(err) {
    console.error(err)
}