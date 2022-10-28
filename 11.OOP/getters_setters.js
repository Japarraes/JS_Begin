// Clases con JS
class Persona {

    // # -> le atribuimos la propiedad de privados a los atributos
    // solo se puede acceder desde dentro del a clase.

    #nombre
    #edad

    // _ -> le atrituimos la propiedad de protegida a los atributos
    // solo se puede acceder desde dentro de la clase o clases descendientes
    _isDeveloper = true

    // Constructor
    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    // Métodos
    saludar() {
        return console.log(`Hola, soy ${this.#nombre} y tengo ${this.#edad} años`)
    }

    getNombre() {
        return this.#nombre
    }
    getEdad() {
        return this.#edad
    }
    setNombre(nombre) {
        this.#nombre = nombre
    }
    setEdad(edad) {
        this.#edad = edad
    }
    isDeveloper() {
        return this._isDeveloper
    }
}

// Instanciación:
const miPersona = new Persona("Juan", 48)
console.log(miPersona.getNombre())
console.log(miPersona.getEdad())
console.log(miPersona.isDeveloper())

miPersona.setNombre("Pepe")
console.log(miPersona.getNombre())




