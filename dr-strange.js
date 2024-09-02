const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const addWeek = (date) => {
    let day = date.getDate();
    let i = date.getDay();
    if (day % 14 > 7) {
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
    const futureDate = new Date(String(yr) + '-' +String(mn) + '-' + String(dt) + ' '  + hr + ':' + min + ':'+ sec);
   return futureDate.toString();
}

let a ={
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }

  console.log(timeTravel(a))