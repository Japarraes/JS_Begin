const persona = {
    nombre: "Juan",
    edad: 48,
    isDeveloper: true,
    saludo: function() {
        console.log("HOla");
    }
}

// console.log(persona);

const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        // nombre: nombre,
        // edad: edad,
        // isDeveloper,
        // Cuando propieda y valor coinciden en el definición, se puede obviar la asignación
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola");
        }
    }
}

const persona2 = crearPersona("Miriam", 10, false);
console.log(persona2);