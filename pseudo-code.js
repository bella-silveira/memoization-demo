function expensiveFunc(arg) {
    if (!expensiveFunc.cache) {
        expensiveFunc.cache = {}
    }

    if(expensiveFunc.cache[arg]) {
        return cache[arg]
    }
    
    // compute the operation
    const result = "some very complex stuff"
    // store result in new entry of cache
    cache[arg] = result

    return result
}