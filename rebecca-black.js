const isFriday = (date) => {
    let d = new Date(date);

    return d.getDay() === 5;
}

const isWeekend = (date) => {
    let d = new Date(date);

    return d.getDay() === 6 || d.getDay() === 7;
}

const isLeapYear = (date) => {
    let d = new Date(date);

    return d.getYear() % 4 === 0;
}

const isLastDayOfMonth = (d) => {
    let mn = d.getMonth()

    if (mn >= 0 && mn < 7) {
        if (mn === 1) {
            switch (isLeapYear(d)) {
                case true:
                    return dayError(29, d)
                default:
                    return dayError(28, d)
            }
        }
        if (mn % 2 == 0) {
            return dayError(31, d)
        }else {
            return dayError(30, d)
        }
    }else if (mn >= 7 && mn <= 11) {
        if (mn % 2 == 0) {
            return dayError(30, d)
        }else {
            return dayError(31, d)
        }
    }
    return false
}

const dayError = (n, d) => {
    if (d.getDate() === n) {
        return true
    }else {
        return false
    }
}

