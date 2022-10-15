// Factorial de un número con While

const number = 5;
let factorial = number;

let n = number;

while (true) {
    n--;
    factorial = factorial * n;
    if (n === 1) {
        break;
    }
}

console.log(`El factorial de ${number} es: ${factorial}`);