// Listas, array
const lista = [1, "str", true, undefined, null];
const lista2 = new Array(1, "str", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "pos0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    isWhite: false,
    contactos: ["Juan", "Miriam", "Alberto"],
    tarjeta: {
        marca: "Scandisk",
        almacenamiento: 32
    }
}
console.log(movil.tarjeta.marca);
console.log(movil.tarjeta.almacenamiento);
movil.tarjeta.almacenamiento = 64;
console.log(movil.tarjeta.almacenamiento);

// Fechas
// Existen librerías de apoyo para trabajar con fechas: Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia =ahora.getDate();
const mes =ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);










