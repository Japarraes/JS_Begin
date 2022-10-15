// Factorial de un número con For
const number = 10;
let factorial = number;

let n = number - 1; 

for (let i = n; i > 1; i--) {
    factorial = factorial * i;
}

console.log(`El factorial de ${number} es: ${factorial}`);