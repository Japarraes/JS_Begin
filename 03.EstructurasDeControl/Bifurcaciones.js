// Estructuras de control

// Bifurcaciones
if (true) {
    console.log("Es verdadero")
}
if (false) {
    console.log("Es verdadero")
} else {
    console.log("No es verdadero")
}

let saldo = 50;
let efectivo = 20;
if (efectivo <= saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente")
}

// if - else if - else
let nota = 5;

if (nota === 5) {
    console.log("Máxima nota")
} else if (nota === 4) {
    console.log("Notable alto")
} else if (nota === 3) {
    console.log("Aprobado")
} else if (nota === 2) {
    console.log("Suspenso")
} else if (nota === 1) {
    console.log("Muy deficiente")
} else {
    console.log("Indique una nota válida")
}

// Switch
let mi_nota = 4

switch (mi_nota) {
    case 5:
        console.log("Sobresaliente")
        break
    case 4:
        console.log("Notable")
        break
    case 3:
        console.log("Aprobado")
        break
    case 2:
        console.log("Suspenso")
        break
    case 1:
        console.log("Muy deficiente")
        break
    default:
        console.log("Indique una nota válida")
        break
}