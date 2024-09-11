const deepCopy = (input) => {
    if (Array.isArray(input)) {
        return input.map(item => deepCopy(item));
    } else if (isDefinitelyAnObject(input)) {
        const output = {};
        for (const key in input) {
            output[key] = deepCopy(input[key]);
        }
        return output;
    } else {
        return input;
    }
}

const isDefinitelyAnObject = (input) => {
    return (
        typeof input === "object" &&
        input !== null &&
        !Array.isArray(input) &&
        !(input instanceof RegExp)
    );
}

const replica = (target, ...sources) => {
    for (const source of sources) {
        if (isDefinitelyAnObject(source)) {
            for (const key in source) {
                if (isDefinitelyAnObject(source[key])) {
                    if (!isDefinitelyAnObject(target[key])) {
                        target[key] = {};
                    }
                    replica(target[key], source[key]);
                } else {
                    target[key] = deepCopy(source[key]);
                }
            }
        }
    }
    return target;
}