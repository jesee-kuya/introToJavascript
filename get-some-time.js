const firstDayWeek = (num, str) => {
    let week = (86400000 * num) * 7
    let date = new Date(str)
    let n = (date.getTime() + week) - (86400000 * 7)
    let current = (new Date(n)).getYear()
    
    while ((new Date(n).getDay()) !== 1 && (new Date(n - 86400000 ).getYear()) === current) {
        n -= 86400000 
    }
    return changeFormat((new Date(n)).toLocaleDateString())
}

const changeFormat = (date) => {
    let str = date.split('/')
    let l = str[0]
    let h = str[1]

    str[1] = l
    str[0] = h
    for (let i = 0 ; i < str.length; i++) {
        str[0], str[1] = str[1], str[0]
        if (str[i].length === 1) {
            str[i] = '0' + str[i]
        }
    }
    return str.join('-')
}
