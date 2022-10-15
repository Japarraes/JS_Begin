// Comparaciones de igualdad

let a = 5
let b = "5"
console.log(typeof a, typeof b)

// Igualdad débil: sólo compara valor
if (a == b) {
    console.log("5 es igual a 5")
}

// Igualdad fuerte: compara valor y tipo de variable
if (a === b) {
    console.log("5 es muy igual a 5")
}

// Comparaciones de desigualdad
let c = 4
let d = "5"

if (c != d) { // Diferentes solo en valor
    console.log("c es diferente a d - débil")
}
if (c !== d) { // Diferentes en tipo
    console.log("c es diferente a d - fuerte")
}

// Mayores y menores
let max = 10
let min = 5

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= min) {
    console.log("max es mayor o igual que min")
}
if (min < max) {
    console.log("min es mayor que max")
}
if (min <= max) {
    console.log("min es mayor o igual que max")
}






