const firstDayWeek = (num, str) => {
    let week = 86400000 * num
    let date = new Date('01-01-'+str)
    let n = date.getTime() + week - 86400000
    return (new Date(n)).toLocaleDateString()
}

console.log(firstDayWeek(1, '1000'))