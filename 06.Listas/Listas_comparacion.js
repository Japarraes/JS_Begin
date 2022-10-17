// Comparación de listas

// .every(): Devuelve si se cumple la lógica indicada para todos los elementos del array
const array = [4, 6, 7, 8, 3, 2, 1, -4, -7, 12, 15, 49];

// const resultado = array.every(valor => {
//     if (valor > 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
const resultado = array.every(valor => valor > 0);
console.log(resultado);

// Comparación de dos listas
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(arr1 === arr2); // False. Esto se debe a que se debe usar una función

const compararArrays = (arr_1, arr_2) => {
    if (arr_1.length !== arr_2.length) return false;
    // const res = arr_1.every((valor, i) => {
    //     if (valor === arr_2[i]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })
    const res = arr_1.every((valor, i) => valor === arr_2[i]);
    return res;
}
console.log(compararArrays(arr1, arr2));

const arr3 = [1, 2, 3, 4];
const arr4 = [1, 2, 3, 4, 5];
console.log(compararArrays(arr3, arr4));