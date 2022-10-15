// Métodos para trabajar con Strings

// Longitud de un string
let str = "Esto es un string";
console.log(str.length);

// Obtener substring: slice(inicio, fin), substring(inicio, fin), substr(inicio, long)
let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 16);
console.log(substring_str);

let substr_str = str.substr(0, 4);
console.log(substr_str);

// Reemplazar cadenas de caracteres: replace(texto old, texto new) 
let cadena = "Hola mi nombre de Juan";
console.log(cadena);
console.log(cadena.replace("Juan", "Antonio"));

// replace - Solo actua sobre la primera coincidencia
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos."
console.log(texto_largo.replace("Tito", "Amedio"));

// Al utilizar la expresión regular /cadena/g (global), reemplaza todas las coincidencias
console.log(texto_largo.replace(/Tito/g, "Amedio"));

// Mayúsculas y minúsculas
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

// toLocaleUpperCase() y toLocaleLowerCase() solo se emplean en caso de algunos idiomas peculiares como el turco.
console.log(cadena.toLocaleUpperCase());
console.log(cadena.toLocaleLowerCase());

// Concatenar cadenas
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Esto es la segunda cadena";
console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y final de una cadena
let str_3 = " Cadena con espacios al inicio y final.  "
console.log(str_3.length);
console.log(str_3);
console.log(str_3.trim());
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el carácter que hay en cierta posición
let str_4 = "Hola soy la cadena número 4";
console.log(str_4.charAt(12));
console.log(str_4[12]);

// Posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Juan y me gusta el balonmano. No me gusta que me llamen Juan";
console.log(str_5.indexOf("Juan")); // Devuelve la primera posición de la primera coincidencia
console.log(str_5.lastIndexOf("Juan")); // Devuelve la primera posición de la última coincidencia
console.log(str_5.indexOf("Jaan")); // Si no lo encuentra, devuelve

// Métodos de cadenas: expresiones regulares
// https://regexr.com
//let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(texto_largo.match(/no/g))

// Comprobar si una cadena contiene una palabra
console.log(texto_largo.includes("prefiere"));
console.log(texto_largo.includes("mona"));

// Conocer si el texto empieza/termina con una cadena concreta
console.log(texto_largo.startsWith("Tito"));
console.log(texto_largo.startsWith("tito"));
console.log(texto_largo.endsWith("Tito"));
console.log(texto_largo.endsWith("."));
