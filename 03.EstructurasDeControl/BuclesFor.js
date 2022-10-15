let lista = [1, 4, 5, 8, 9, 12]

// Bucles For
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

// Bucle for...of
for (const iterator of lista) {
    console.log(iterator)
}

// Bucle for...Each
lista.forEach(element => {
    console.log(element)
});

// Bucle for...in
let persona = {
    name: "Juan",
    surname: "Parra",
    age: 48,
    isDeveloper: true
}
for (const key in persona) {
    console.log(key)
    console.log(persona[key])
}


