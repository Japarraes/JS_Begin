// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {
        continue;
    }

    var j = 5;
    const k = 6;
    console.log(lista[i]);

    if (lista[i] > 5) {
        break;
    }
}

// Ambito variables dentro de un bucle
console.log(j);
console.log(k);
console.log(i);

