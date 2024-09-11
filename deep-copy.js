function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Return directly if it's a primitive type or null
    }

    let copy = Array.isArray(obj) ? [] : {}; // Create a new object or array

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]); // Recursively copy each property of the object
        }
    }

    return copy;
}