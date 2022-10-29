function getFibonacciNumbers(n) {

    a = 0
    b = 1
    fib_numbers = []

    if (n == 1) {
        fib_numbers.push(a)
    } else if (n == 2) {
        fib_numbers.push(a)
        fib_numbers.push(b)
    } else {
        fib_numbers.push(a)
        fib_numbers.push(b)
        i = 0
        while (i < n-2) {
            c = a + b
            fib_numbers.push(c)
            a = b
            b = c
            i += 1
        }
    }

    return fib_numbers
}

const num = 6
const arr = getFibonacciNumbers(num)
console.log(arr)