// Clases con JS
class Persona {
    // Atributos
    nombre;
    edad;
    isDeveloper;

    // Constructor
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    // Métodos
    saludar() {
        return console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

// Instanciación:
const miPersona = new Persona("Juan", 48, true)
miPersona.saludar()