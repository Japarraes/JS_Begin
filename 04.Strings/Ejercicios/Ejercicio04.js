let nombre = "Juan Antonio";
let apellidos = "Parra Espinosa"

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ", apellidos);
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMays = estudiante.toUpperCase();
console.log(estudianteMays);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudiante_length = estudiante.length;
console.log(estudiante_length);

// Una variable que contenga la primera letra del Nombre
let first_letter = nombre.charAt(0);
console.log(first_letter);

// Una variable que contenga la última letra del apellido
let last_letter = apellidos.charAt(apellidos.length-1);
console.log(last_letter);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
//let str_trim = estudiante.trim();
str_trim = estudiante.replace(/ /g, "");
console.log(str_trim);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let isEstudiante = estudiante.includes(nombre);
console.log(isEstudiante);