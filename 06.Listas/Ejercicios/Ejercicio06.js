// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = ["Pan", "Leche", "azúcar", "patatas", "huevos"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol");
console.log(compra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop();
console.log(compra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const myMovies = [
    {titulo: "Los Goonies", director: "Steven Spielberg", fecha: 1985},
    {titulo: "Gremlins", director: "Joe Dante", fecha: 1984},
    {titulo: "Los vengadores", director: "Joss Whedon", fecha: 2012}
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const movies_2010 = myMovies.filter(movie => movie.fecha > 2010);
console.log(movies_2010);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = myMovies.map(valor => `${valor.director}`)
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = myMovies.map(valor => `${valor.titulo}`)
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const director_titulo = directores.concat(titulos);
console.log(director_titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const director_titulo_prog = [...directores, ...titulos];
console.log(director_titulo_prog);