// Un nuevo Set con los nombres de tu familia
const familyNames = ["Juan", "Marina", "Miriam", "Alberto", "Pedro", "Teresa"];
const family_set = new Set(familyNames);
console.log(family_set);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
family_set.add("Juan");
console.log(family_set);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
family_set.add("JavaScript");
console.log(family_set);