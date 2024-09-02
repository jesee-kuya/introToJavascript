const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const addWeek = (date) => {
    let day = date.getDate();
    let i = date.getDay();
    if (day % 14 > 7 || day % 14 === 0) {
        return 'second' + dayNames[i];
    }
    return dayNames[i];
}


const timeTravel = (obj) => {
    let yr = obj.date.getFullYear();
    let mn = obj.date.getMonth();
    let dt = obj.date.getDate();
    let hr = obj.hour;
    let min = obj.minute;
    let sec = obj.second;
    return new Date(String(yr) + '-' +String(mn) + '-' + String(dt) + ' '  + hr + ':' + min + ':'+ sec);
}

// console.log(addWeek(new Date('0001-01-01')))
// console.log(addWeek(new Date('0001-01-02')))
// console.log(addWeek(new Date('0001-01-07')) )
// console.log(addWeek(new Date('0001-01-08')))
// console.log(addWeek(new Date('0001-01-09')) )
// console.log(addWeek(new Date('0001-01-14')))