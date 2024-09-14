const throttle = (func, wait) => {
    let last = 0;
    return function(...args){
        const now = +new Date();
        if (now - last > wait) {
            func.apply(this, args);
            last = now;
        }
    }   
}
