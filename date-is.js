const isValid = (date) => {
    let n = new Date(date)
    return String(n.valueOf()) !== 'NaN'
}

const isAfter = (date, date1) => {
    let d1 = new Date(date).getTime()
    let d2 = new Date(date1).getTime()
    return d1 > d2
}

const isBefore = (date, date1) => {
    return !isAfter(date, date1)
}

const isFuture = (date) => {
    if (!isValid(date)) {
        return false
    }
    return new Date().getTime() < new Date(date).getTime()
}

const isPast = (date) => {
    return !isFuture(date)
}