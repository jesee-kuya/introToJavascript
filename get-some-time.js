const firstDayWeek = (num, str) => {
    let day = new Date(String(num) +',' + str)
    return day.getDay();
}

console.log(firstDayWeek(19, '1975'))