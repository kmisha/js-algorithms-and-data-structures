const factorial = number => number > 1 ? number * factorial(number - 1) : 1
const factorialIterable = function*(number) {
    let i = 1, prev = 1
    while (i <= number) {
        prev *= i++
        yield prev
    }
}


export { factorial, factorialIterable }
