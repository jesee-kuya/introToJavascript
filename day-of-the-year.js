const dayOfTheYear = (date) => {
    let yr = date.getFullYear()
    let t1 = date.getTime()
    let tm = new Date(String(yr)).getTime()
    return Math.round((t1 - tm) / 86400000)
}