const citiesOnly = (arr) => {
    let a = [];
    let arr1 = arr.map((x) => {
        a.push(x.city);
    });
    return a;
}

const upperCasingStates = (arr) => {
    let arr1 = arr.map((x) => {
        let nArr = x.split('');
        nArr[0] = nArr[0].toUpperCase();
        for (let i = 0; i < nArr.length; i++) {
            if (nArr[i] === ' ') {
                nArr[i + 1] = nArr[i + 1].toUpperCase();
            };
        };
        return nArr.join('');
    });
    return arr1;
}

const fahrenheitToCelsius = (arr) => {
    let arr1 = arr.map((x) => {
        let n = '';
        for (let i = 0; i < x.length; i++) {
            if ((x[i] >= '0' && x[i] <= '9') || x[i] === '-') {
                n += x[i];
            };
        };
        return String(Math.ceil((Number(n) - 32) * (5/9))) + '°C';
    });
    return arr1;
}

const trimTemp = (arr) => {
    let arr1 = arr.map((x) => {
        let tem = x.temperature.split(' ');
        x.temperature = tem.join('');
        return x;
    });
    return arr1;
}

const tempForecasts = (arr) => {
    let arr1 = arr.map((x) => {
        x.temperature = celsius(x.temperature);
        x.state = caps(x.state)
        return x.temperature + ' in '+ x.city + ', '+ x.state
    })
    return arr1
}

const celsius = (x) => {
    let n = ''
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= '0' && x[i] <= '9') {
            n += x[i];
        };
    };
    return String(Math.round((Number(n) - 32) * (5/9))) + '°Celsius';
}

const caps = (str) => {
    let x = str.split('')
    x[0] = x[0].toUpperCase()
    for (let i = 0; i < x.length; i++) {
        if (x[i] === ' ') {
            x[i + 1] = x[i + 1].toUpperCase();
        };
    };
    return x.join('')
}