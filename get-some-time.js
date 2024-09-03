const firstDayWeek = (num, str) => {
    let week = 86400000 * num
    let date = new Date('01-01-'+str)
    let n = date.getTime() + week - 86400000
    return changeFormat((new Date(n)).toLocaleDateString())
}

const changeFormat = (date) => {
    let str = date.split('/')
    for (let i = 0 ; i < str.length; i++) {
        if (str[i].length === 1) {
            str[i] = '0' + str[i]
        }
    }
    return str.join('-')
}
console.log(firstDayWeek(1, '1000'))
