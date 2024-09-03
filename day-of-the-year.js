const dayOfTheYear= (date) => {
    let days = 1;
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}

const isFirstofFirst = (date) => {
    return date.getDate() === 1 && date.getMonth() === 0;
}

console.log(dayOfTheYear(new Date('0001-01-01')))