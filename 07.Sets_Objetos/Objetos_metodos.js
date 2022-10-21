// Trabajando con objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Parra",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código Da Vichi"],
    "4-juegos": [1, 2, 3 ,4]
}

console.log(obj["4-juegos"]);
console.log(obj.nombre);

// Podemos acceder a propiedades a través de variables
const prop = "isDeveloper"
console.log(obj[prop]);

// Replicar objetos
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo";
console.log(obj2.nombre);
console.log(obj.nombre); // El cambio se hace en los objetos porque ambos objetos apuntan a la misma dirección de memoria.
                         // Esto solo pasa con los objetos, no con las variables

// Si la copia del objeto la hacemos con el factor de propagación, no tenemos el problema anterior
const obj3 = {...obj};
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Pepe";
console.log(obj.nombre);
console.log(obj3.nombre);

// Cómo ordenar listas de objetos en función de una propiedad
const listaObjetos = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "Titánic", anyo: 1937},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012},
]

// .sort(): ordena y cambia el valor del objeto original
listaObjetos.sort((a, b) => a.anyo - b.anyo);
console.log(listaObjetos);