// Una variable que contenga tu altura en centímetros (entero)
let height_cm = 168;

// Una variable que contenga tu altura en metros (número de coma flotante)
let height_m = 1.68;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weight_kg = 79.6;

// Una variable que contenga tu altura en metros redondeada hacia arriba
let height_round_m = Math.round(height_m);
console.log(height_round_m);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let weight_round_kg = Math.floor(weight_kg);
console.log(weight_round_kg);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let a = Number.MAX_VALUE;
let b = Number.MAX_VALUE + 1;
console.log(a);
console.log(b);
if (a === b) {
    console.log(true)
}