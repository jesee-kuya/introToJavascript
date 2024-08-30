function split(str, sep) {
    let arr = []
    let s = ''
    if (sep !== '') {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== sep) {
                s += str[i]
            }else {
                if (s !== '') {
                    arr.push(s)
                    s = ''
                }
            }
        }
        if (s !== '') {
            arr.push(s)
            s = ''
        }
    }else {
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
    }
    return arr
}


function join(arr, joiner) {
    let str = ''
    for (let i = 0 ; i < arr.length; i++) {
        if (str !== '') {
            if (joiner !== undefined) {
                str = str + joiner + arr[i]
            }else {
                str += arr[i]
            }
        }else {
            str += arr[i]
        }
    }
    return str
}