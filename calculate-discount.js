function calculateDiscount(itemPrice) {
    const DISCOUNT = 0.25
    if (!calculateDiscount.cache) {
        calculateDiscount.cache = {}
    }

    if(!calculateDiscount.cache[itemPrice]) {
        return calculateDiscount[itemPrice] = itemPrice - (itemPrice * DISCOUNT)
    }

    return calculateDiscount[itemPrice]
}

console.time("non-memoized call")
console.log(calculateDiscount(600))
console.timeEnd("non-memoized call")
console.time("memoized call")
console.log(calculateDiscount(600))
console.timeEnd("memoized call")

// in this case, about 95% faster (!!!)