function dogYears(n, age) {
    let years = age / 31557600 * 7
    let num

    switch (n) {
        case 'earth':
            num = years;
            break
        case 'mercury':
            num = years / 0.2408467;
            break
        case 'venus':
            num = years / 0.61519726;
            break
        case 'mars' : 
            num = years / 1.8808158
            break
        case 'jupiter' : 
            num = years / 11.862615
            break
        case 'saturn' : 
            num = years / 29.447498
            break
        case 'uranus' :
            num = years / 84.016846 
            break
        case 'neptune' :
            num = years / 164.79132
            break
    }
    return String(num.toFixed(2))
}