const countLeapYears = (date) => {
    let yrs = 0

    for (let i = 1; i <= date.getYear(); i++) {
        if (i % 4 === 0 ) {
            yrs++
        }
    }
    return yrs
}