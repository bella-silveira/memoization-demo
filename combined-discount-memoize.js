function memoize(fn) {
    return function () {
        // split up the arguments
        const args = Array.prototype.slice.call(arguments)

        // initialize cache if it doesn't exist
        fn.cache = fn.cache || {};

        // return cached result or alocate computed result cache then returning it
        return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this,args))
    }
}

function calculateDiscount(itemPrice) {
    const DISCOUNT = 0.25
    
    return itemPrice - (itemPrice * DISCOUNT)
}

const memoizedDiscount = memoize(calculateDiscount)

console.time("non-memoized call")
console.log(memoizedDiscount(1200))
console.timeEnd("non-memoized call")

console.time("memoized call")
console.log(memoizedDiscount(1200))
console.timeEnd("memoized call")