// Inheritance - Herencia
class Persona {

    // # -> le atribuimos la propiedad de privados a los atributos
    // solo se puede acceder desde dentro del a clase.

    //#nombre
    //#edad

    // _ -> le atrituimos la propiedad de protegida a los atributos
    // solo se puede acceder desde dentro de la clase o clases descendientes
    _nombre
    _edad
    _isDeveloper = true

    // Constructor
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    // Métodos
    saludar() {
        return console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`)
    }

    getNombre() {
        return this._nombre
    }
    getEdad() {
        return this._edad
    }
    setNombre(nombre) {
        this._nombre = nombre
    }
    setEdad(edad) {
        this._edad = edad
    }
    isDeveloper() {
        return this._isDeveloper
    }
}

class Desarrollador extends Persona {
    
    // atributos específicos de la clase Desarrollador
    _lenguaje

    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this._lenguaje = lenguaje 
    }

    getLenguaje() {
        return this._lenguaje
    }
    setLenguaje(lenguaje){
        this._lenguaje = lenguaje
    }

    // Polimorfismo: Podemos volver a definir métodos de la clase padre
    saludar(){
        super.saludar()
        console.log(`Soy desarrollador de ${this._lenguaje}`)
    }

}

const miDesarrolador = new Desarrollador("Alberto", 18, "JavaScript")
miDesarrolador.saludar()
console.log(miDesarrolador.getLenguaje())



