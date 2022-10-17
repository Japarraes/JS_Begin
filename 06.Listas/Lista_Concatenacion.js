// Concatenación

// .concat(): unir dos listas
arr1 = ["Hola", 1, null];
arr2 = ["adios", 2, undefined];
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

// Unir dos listas con el factor de propagación.
// Trata cada elemento del array como un elemento independiente
arr3 = [...arr1, ...arr2]
console.log(arr3);

// Error: es distinto si hacemos esto. Se obtine una nueva lista donde cada elemento es una lista
arr4 = [arr1, arr2];
console.log(arr4);

// .slice(ini, fin[no incluido]): Obtener una lista a partir de otra lista
arr5 = arr3.slice(1, 4);
console.log(arr5);

arr6 = arr3.slice(1, -1);
console.log(arr6);