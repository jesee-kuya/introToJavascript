async function race(promises = []) {
    if (promises.length === 0) {
        setTimeout(() => {}, 10000);
    }
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then(resolve, reject);
        });
    });
}