// Métodos más avanzados con Listas
const arr = ["Madrid", "Málaga", "Sevilla", "Alicante", "León"];
const val = arr.forEach(valor => {
    console.log(valor)
})
console.log(val);

// .map(): Modificar cada valor de un array
// const newArr = arr.map((valor, indice) => {
//     return `${indice + 1} - ${valor}`;
// })
const newArr = arr.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArr);

// .filter(): Valor True para los objetos que quiero pasar y False para los que no
const listaObjetos = [
    {nombre: "Juan", edad: 48},
    {nombre: "Pepe", edad: 24},
    {nombre: "Paco", edad: 35},
    {nombre: "Luis", edad: 69},
]
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true;
//     } else {
//         return false
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores);

const nuevaLIsta = listaObjetos.filter(obj => obj.nombre !== "Juan");
console.log(nuevaLIsta);

// .reduce(): Obtener un valor/objeto a partir de una lista
const valores = [3, 8, 9, 5, 7, 4, 2];
const suma = valores.reduce((acumulado_ant, current, index, arrayOriginal) => {
    console.log(acumulado_ant);
    console.log(current);
    console.log(index);
    console.log(arrayOriginal);
    return acumulado_ant + current;
})
console.log(suma);