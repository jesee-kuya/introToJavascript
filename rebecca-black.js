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

const isLastDayOfMonth = (date) => {
    let d = new Date(date);
    let mn = d.getMonth()

    if (mn >= 0 && mn < 7) {
        if (mn === 1) {
            switch (isLeapYear(date)) {
                case true:
                    return dayError(29, date)
                default:
                    return dayError(28, date)
            }
        }
        if (mn % 2 == 0) {
            return dayError(31, date)
        }else {
            return dayError(30, date)
        }
    }else if (mn >= 7 && mn <= 11) {
        if (mn % 2 == 0) {
            return dayError(30, date)
        }else {
            return dayError(32, date)
        }
    }
}

const dayError = (n, date) => {
    let d = new Date(date);
    if (d.getDate() === n) {
        return true
    }else {
        return false
    }
}
