// Factorial de un número con While

const number = 10;
let factorial = number;

let n = number;

while (n > 1) {
    n--;
    factorial = factorial * n;
}

console.log(`El factorial de ${number} es: ${factorial}`);