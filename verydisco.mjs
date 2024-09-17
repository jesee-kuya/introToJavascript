const word = process.argv
let str = word[2]
let arr = str.split(' ')

for(let i in arr) {
    let w = arr[i]
    let end = (Math.ceil(w.length/2))
    let first = w.slice(0,end)
    let last = w.slice(end)
    arr[i] = last + first
}

console.log(arr.join(' '))