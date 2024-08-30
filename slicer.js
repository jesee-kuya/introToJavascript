function slice(obj, in1, in2) {
    let n = []
    let last = obj.length
    if (in2 !== undefined) {
        if (in2 < 0) {
            last = obj.length + in2
        }else {
            last = in2
        }
    }

    if (in1 < 0) {
        in1 = obj.length + in1
    }

    console.log(in1)

    for (let i = in1; i < last; i++) {
        n.push(obj[i])
    }
    return n
}