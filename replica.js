const deepCopy = (output, input) => {
    if (Array.isArray(input)) {
        for (var i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i]);
        }
        return output;
    } else if (isDefenitelyAnObject(input)) {
        for (var key in input) {
            output[key] = deepCopy(input[key]);
        }
        return output;
    } else {
        return input;
    }
}

