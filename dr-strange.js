function addWeek(date) {
    const secondWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday",
    };
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