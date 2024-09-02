function addWeek(date) {
    const secondWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday",
    ];
    let zTime = date.getTime() + 62135596800000;
    return secondWeek[(zTime / 86400000) % 14];
}


const timeTravel = (obj) => {
    let yr = obj.date.getFullYear();
    let mn = obj.date.getMonth() + 1;
    console.log(mn)
    let dt = obj.date.getDate();
    let hr = obj.hour;
    let min = obj.minute;
    let sec = obj.second;
    return new Date(String(yr) + '-' +String(mn) + '-' + String(dt) + ' '  + hr + ':' + min + ':'+ sec);
}

console.log(addWeek(new Date('0001-01-01')),addWeek(new Date('0001-01-02')), addWeek(new Date('0001-01-07')), addWeek(new Date('0001-01-08')), addWeek(new Date('0001-01-09')));