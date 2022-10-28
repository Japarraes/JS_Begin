class Estudiante {

    _nombre
    _asignaturas = ["JavaScript", "HTML", "CSS"]
    
    //Constructor
    constructor(nombre) {
        this._nombre = nombre
    }

    // Métodos
    obtenDatos() {
        return {
            "nombre": this._nombre,
            "asignaturas": this._asignaturas
        }
    }
}

// Instanciación
const miEstudiante = new Estudiante("Juan")
console.log(miEstudiante.obtenDatos())