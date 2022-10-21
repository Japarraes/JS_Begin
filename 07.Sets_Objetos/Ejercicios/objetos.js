// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const miYo = {
    nombre: "Juan",
    apellido: "Parra",
    edad: 48,
    altura: 168,
    isDeveloper: true,
}

// Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = miYo.edad;
console.log(miEdad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const myFriends = [
    {Nombre: "Juan", apellidos: "Parra", edad: 49},
    {Nombre: "Pablo", apellidos: "Ruiz", edad: 47},
    {Nombre: "Daniel", apellidos: "Luque", edad: 48},
    {Nombre: "Antonio", apellidos: "Aguilera", edad: 46},
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const friends_Edad = myFriends.sort((a, b) => b.edad - a.edad);
console.log(friends_Edad);