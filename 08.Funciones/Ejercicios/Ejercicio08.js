// Crea un archivo JS que contenga las siguientes líneas:

// Una función sin parámetros que devuelva siempre "true"
function alwaysTrue() {
    return true;
}

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise ((resolve, reject) => {
    setTimeout(alwaysTrue, 5000);
    if (true) {
        resolve();
    } else {
        reject();
    }
})

miPromesa
    .then(() => console.log("Hola soy una Promersa"))
    .catch(() => console.log("Error"))


// Una función generadora de índices pares automáticos
function* genIdPar() {
    let id = 0;
    while(true) {
        id = id + 2;
        if (id === 10) {
            return id;
        }
        yield id;
    }
}

const pares = genIdPar();
console.log(pares.next().value);
console.log(pares.next().value);
