// Métodos con numbers

// .valueOf(): Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);
console.log(a);
console.log(b);
console.log(a + b);
console.log(b.valueOf());

// Se puede hacer también con String
let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// Nan (Not a Number) - Infinity
let n = Number("Adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor2 = null;
console.log(isNaN(numerador/divisor));
console.log(isNaN(numerador/divisor2));

// Convertir los str a valores numéricos con Number, parseInt y parseFloat
let num = "4.56";
let num2 = 5;
console.log(num + num2); // Está haciendo una concatenación
console.log(Number(num) + num2);

console.log(parseInt(num));
console.log(parseFloat(num));

// Números hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex, 16)); // No haría falta indicar la base 16 ya que es la que aplica por defecto

// Obtener los valores máx y min
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;
console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2**1024); // Supera el límite máximo y mostraría 'Infinity'