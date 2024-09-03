function isValid(date) {
    let n = new Date(date)
    return String(n.valueOf()) !== 'NaN'
}

function isAfter(date, date1){
    let d1 = new Date(date).getTime()
    let d2 = new Date(date1).getTime()
    return d1 > d2
}

function isBefore(date, date1) {
    let d1 = new Date(date).getTime()
    let d2 = new Date(date1).getTime()
    return d1 < d2
}

function isFuture(date) {
    let n = new Date(date)
    if (String(n.valueOf()) === 'NaN') {
        return false
    }
    return new Date().getTime() < new Date(date).getTime()
}

function isPast(date) {
    let n = new Date(date)
    if (String(n.valueOf()) === 'NaN') {
        return false
    }
    return new Date().getTime() > new Date(date).getTime()
}