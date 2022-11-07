// LocalStorage

// localStorage.setItem("nombre", "Juan")
// localStorage.setItem("nombre", "Antonio")

// console.log(localStorage.getItem("nombre"))

// Guardar un objeto en el localStorage
// localStorage.setItem("persona", JSON.stringify({"nombre": "Juan", "edad": 48}))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto JavaScript

console.log(JSON.parse(localStorage.getItem("persona")))

// Eliminar un item del localStorage
localStorage.removeItem("nombre")

// SesionStorage funciona de la misma manera que LocalStorage
sessionStorage.setItem("nombre-sesion", "Juan")

// Cookies: funciona diferente, mediante document.
document.cookie = "nombreCookie=JuanCookie"
document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)
