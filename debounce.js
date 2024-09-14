const debounce = (func, wait) => {
    let timer = null
    return function(...args){
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}