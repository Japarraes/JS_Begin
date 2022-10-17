// Listas (arrays, vectores, ...)
let var1 = 45;
let lista = [1, 2, 3, "hola", true, {id:5}, null, undefined, var1]
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[5]);

// .pust(), .unshift(): Métodos para añadir elementos al array por final e inicio, respectivamente
lista.push("final", 100, "Pepe");
console.log(lista);

lista.unshift("principio");
console.log(lista);

// .pop(), .shift(): Eliminar elementos de nuestro array por final e inicio, respectivamente
lista.pop();
console.log(lista);

lista.shift();
console.log(lista);


// .splice(x, y, z): eliminar, modificar o añadir elementos en un array
const arr = [0, 1, 2, 3, 4, 5];

// Eliminar valores: .splice(index, nº elementos a eliminar)
arr.splice(1, 2);
console.log(arr);

// Añadir valores: .splice(index, 0, elementos)
arr.splice(1, 0, "nuevo");
console.log(arr);

// Modificar valores: .splice(index, 1, valores)
arr.splice(2, 1, "3->nuevo");
console.log(arr);

