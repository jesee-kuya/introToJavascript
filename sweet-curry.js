const mult2 = (a) => {
    return function(b) {
        return a * b
    }
}

const add3 = (a) => {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

