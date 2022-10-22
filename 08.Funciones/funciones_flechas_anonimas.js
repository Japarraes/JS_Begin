// Funciones de tipo Flecha - Funciones anónimas
const array = [7, 65, 6, 2, 36, 21];

const array2 = array.map((valor) => valor * 2);
console.log(array2);

// const dobleValor = valor => {
//     return valor * 2;
// }

console.log(dobleValor(6))
console.log(doble(6));

const dobleValor = valor => valor * 2;

function doble(valor) {
    return valor * 2;
}

console.log(dobleValor(6))
console.log(doble(6));

