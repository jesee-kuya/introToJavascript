function dogYears(n, age) {
    let years = age / 31557600 * 7
    let num
    

    if (n === 'earth') {
            num = years;
    }else if (n === 'mercury') {
            num = years / 0.2408467;
    }else if (n ==='venus'){
            num = years / 0.61519726;
    }else if (n === 'mars') {
            num = years / 1.8808158;
    }else if (n === 'jupiter') {
            num = years / 11.862615;
    }else if (n === 'saturn') {
            num = years / 29.447498;
    }else if (n === 'uranus') {
            num = years / 84.016846;
    }else if (n === 'neptune') {
            num = years / 164.79132;
    }
    return Number(num.toFixed(2))
}