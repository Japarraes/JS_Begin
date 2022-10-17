// Ordenación de listas y comparación
// .sort(): 
const array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);
array.sort((a, b) => {
    if (a < b) {
        return +1; // Devuelve el array invertido de orden
    } else if (a > b) {
        return -1 
    } else { // a === b
        return 0
    }
});
console.log(array);

// Cómo ordenar de menor a mayor un array sólo de números
arrayNum = [4, 1, 7, 3, 1, 5, 9];
arrayNum.sort((a, b) => a - b);
console.log(arrayNum);

// Cómo ordenar de mayor a menor un array sólo de números
arrayNum = [4, 1, 7, 3, 1, 5, 9];
arrayNum.sort((a, b) => b - a);
console.log(arrayNum);

// Ordenación de array con objetos
const listaObjetos = [
    {nombre: "Juan", edad: 48},
    {nombre: "Pepe", edad: 24},
    {nombre: "Paco", edad: 35},
    {nombre: "Luis", edad: 69},
    {nombre: "John", edad: 72},
];
// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1;
//     } else if (a.edad > b.edad) {
//         return +1;
//     } else {
//         return 0;
//     }
// })
listaObjetos.sort((a, b) => b.edad - a.edad); // Ordenación de mayor a menor
console.log(listaObjetos);
listaObjetos.sort((a, b) => a.edad - b.edad); // Ordenación de mayor a menor
console.log(listaObjetos);
