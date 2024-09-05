const hasCity = (country, arr) => {
    return function(city) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase() === city.toLowerCase()) {
                return city + ' is a city from ' + country
            }
            return city + ' is not a city from ' + country
        }
    }
}