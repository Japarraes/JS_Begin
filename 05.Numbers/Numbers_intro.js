// Numbers 
let a = 5;
console.log(a);

let b = 0.1;
console.log(b);

// Precisión de decimales
let c = 0.1;
console.log(c * b);
// Truco para mostrar sólo los decimales "reales"
console.log(Math.round((c * b)*100)/100);

// Operaciones aritméticas
// (+) Suma, (-) Resta, (*) Multiplicación, (/) División (%) Resto división

// Representación de números de cadenas de texto
console.log(typeof a);
let a_str = a.toString();
console.log(a_str);
console.log(typeof a_str);

// Redondeo de decimales
console.log(c * b);
// .toFixed(nº decimales) --> Se obtine un str
console.log((c * b).toFixed(2));
let d = (c * b).toFixed(2);
console.log(d);
console.log(typeof d);

// .toPrecision(x): Devuelve un str - Muestra el número de cifras que queremos mostrar (enteros y decimales)
let e = 123.21648625;
let f = 125465485325;
console.log(e.toPrecision(5));
console.log(f.toPrecision(5));

