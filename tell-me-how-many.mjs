const words = process.argv
let arr = []

if (words[2]) {
    arr = words[2].split('/')
}else {
    arr = words[1].split('/')
}

console.log(arr.length - 1)