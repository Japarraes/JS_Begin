// Funciones

saludar("Juan");

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

//////////
let nombre_2 = "Juan";
console.log(nombre_2);

despedir(nombre_2);
function despedir(nombre) {
    nombre = "Diego";
    console.log(`Adios ${nombre}`);
}

console.log(nombre_2);

//////////
let persona = {nombre: "Juan", apellidos:"González"};

saludarPersona(persona);

function saludarPersona(objeto) {
    objeto.nombre = "Pepe";
    console.log(objeto.nombre);
}

console.log(persona.nombre)

// Valores por defecto en funciones
function imprimeNumero(num = 7) { // Si no se le pasa un valor a la función, toma el 7
    console.log(num);
}
imprimeNumero(9);
imprimeNumero();

// Paso de parámetros con el factor de propagación
function imprimir(...parametros) {
    console.log(parametros);
}
imprimir(1, 2, 6, "hola");

function suma(...nums) {
    console.log(nums.reduce((a, b) => a + b))
}
suma (1, 3, 5, 7);

