// Métodos iteracion en listas
const arr = ["hola", 2, 5, 90, false, undefined];

// Forma antigua (poco eficiente)
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Forma ES6 (actual y más eficiente)
arr.forEach(item => {
    console.log(item);
})

// .find(): Búsqueda de un valor en una lista
const var1 = arr.find(item =>{
    if (item === 90) {
        return true
    }
})
console.log(var1);

const listaObjetos = [
    {nombre: "Juan", edad: 48},
    {nombre: "Pepe", edad: 24},
    {nombre: "Paco", edad: 35},
    {nombre: "Luis", edad: 69},
]
// Otras formas de hacer los mismo:
const objeto = listaObjetos.find(o => {
    if (o.nombre === "Pepe") {
        return true
    }
})
console.log(objeto.edad);

const objeto2 = listaObjetos.find(o => {
    return o.nombre === "Luis"
})
console.log(objeto2.edad);

// Si solo tenemos un return, podemos eliminarlo 
const objeto3 = listaObjetos.find(o => o.nombre === "Paco")
console.log(objeto3.edad);

// Lo más común que se suele hacer para acceder una una única propiedad de un objeto
const {edad} = listaObjetos.find(o => o.nombre === "Juan")
console.log(edad)
