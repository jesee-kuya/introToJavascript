const defaultCurry = (obj1) => {
    return function(obj2) {
        return {...obj1, ...obj2}
    }
}

const mapCurry = (func) => {
    return function(obj1) {
        let n = {}
        for (let key in obj1) {
            let k = func([key, obj1[key]])
            n[k[0]] = k[1]
        }
        return n
    }
}

const reduceCurry = (func) => {
    return function(obj1, acc) {
        if (acc === undefined) {
            acc = 0
        }
        for (let key in obj1) {
            acc = func(acc, [key, obj1[key]])
        }
        return acc
    }
}

const filterCurry = (func) => {
    return function(obj1) {
        let n = {}
        for (let key in obj1) {
            if (func([key, obj1[key]])) {
                n[key] = obj1[key]
            }
        }
        return n
    }
}

const reduceScore = (obj1, obj2) => {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}

const filterForce = (personnel) => {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(personnel)
}

const mapAverage = (personnel) => {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(personnel);
    console.log(avgScores)
    for (let key in avgScores) {
        personnel[key].averageScore = avgScores[key];
    }
    return personnel;
}