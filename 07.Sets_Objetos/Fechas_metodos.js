// Trabajando con fechas
const fecha = new Date();

console.log(fecha);

// Los meses inicializan en cero: 0 - Enero, 1 - Febrero, ...
const fecha2 = new Date(1974, 0, 24)
console.log(fecha2)
const fecha3 = new Date(1974, 0, 24, 17, 24, 32);
console.log(fecha3);

// También se puede definir indicando mS (a partir de 1 Ene 1974)
const fecha4 = new Date(100000000000);
console.log(fecha4);
const fecha5 = new Date(-100000000000);
console.log(fecha5);

// También se pueden definir fechas con string
const fecha6 = new Date("January 24, 1974");
console.log(fecha6);

// Comparar fechas
console.log(fecha < fecha3);

const fecha7 = new Date(1974, 0, 24, 17, 24, 32);
console.log(fecha7);

console.log(fecha3 === fecha7); // Error, no se pueden comparar fechas así. Hay que pasarlas a mS
console.log(fecha3.getTime() === fecha7.getTime()); // Esta es la forma de comparar fechas

// Obtener día, mes y año de una fecha
console.log(fecha7.getDate());
console.log(fecha7.getMonth()+1);
console.log(fecha7.getFullYear());

// Mostrar una fecha en un string
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha7.toLocaleDateString("en-US")); // Si no indicamos nada, coge la del sistema
