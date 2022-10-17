// Identificar si existe un valor en un array y objetos iterables
// .some(): funciona igual que .every() pero devuelve true si alguna cumple la condición
const array = [2, 5, 9, 15, 1, 2, 0, 4];
const res = array.some(valor => valor > 10);
console.log(res);

const existe = array.some(valor => valor === 0);
console.log(existe);

// Lo mismo se puede hacer con objetos.
const listaObjetos = [
    {nombre: "Juan", edad: 48},
    {nombre: "Pepe", edad: 24},
    {nombre: "Paco", edad: 35},
    {nombre: "Luis", edad: 69},
    {nombre: "John", edad: 72},
];
const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan");
console.log(existeJuan);

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy un estudiante";
const arr_str = Array.from(str);
console.log(arr_str);

const set = new Set([2, 3, "hola", 4]);
const arr_set = Array.from(set);
console.log(arr_set);

// Iterable de todos los indices de nuestro array
const keys = array.keys();
console.log(keys);
const arr_keys = Array.from(keys);
console.log(arr_keys);