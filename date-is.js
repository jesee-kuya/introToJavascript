function isValid(date) {
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
}

const isAfter = (date, date1) => {
    let d1 = new Date(date).getTime()
    let d2 = new Date(date1).getTime()
    return d1 > d2
}

const isBefore = (date, date1) => {
    let d1 = new Date(date).getTime()
    let d2 = new Date(date1).getTime()
    return d1 < d2
}

const isFuture = (date) => {
    let n = new Date(date)
    if (!isValid(date)) {
        return false
    }
    return new Date().getTime() < new Date(date).getTime()
}

const isPast = (date) => {
    let n = new Date(date)
    if (!isValid(date)) {
        return false
    }
    return new Date().getTime() > new Date(date).getTime()
}

console.log(isValid('201301'))