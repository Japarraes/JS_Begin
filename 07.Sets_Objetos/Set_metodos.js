// Trabajando con sets (conjuntos): conjunto no ordenado de elementos únicos
const array = [1, 2, 3, 4, 5, 6, 1, "hola", {id:5}, {id:5}] // id:5 se llaman igual pero hacen referencia a valores distitos.

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// .add()
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)

// .delete()
miSet.delete("hola")
console.log(miSet)

// .clear()
//miSet.clear()
//console.log(miSet)

// .has()
console.log(array.includes(2))
console.log(miSet.has(40))
console.log(miSet.has(9))

// .size()
console.log(miSet.size)

// Buble de un set
miSet.forEach(valor => {
    console.log(valor)
})

// Obtener los valores del set con un objeto iterator
const it_miset = miSet.values()
console.log(it_miset)

// Obtener los valores del set en un array con el factor de progagación
const arr_miSet = [...miSet]
console.log(arr_miSet)