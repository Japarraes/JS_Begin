// Crea un archivo llamado fechas.js que contenga las siguientes líneas:
// La fecha de hoy:
const hoy = new Date()
console.log(hoy);

// La fecha de tu nacimiento:
const birthday = new Date(1974, 0, 24);
console.log(birthday);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento:
const isLater = hoy.getTime() > birthday.getTime();
console.log(isLater);

// Una variable que contenga el día de tu nacimiento:
const day_of_Birthday = birthday.getDate();
console.log(day_of_Birthday);

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0):
const month_of_Birthday = birthday.getMonth();
console.log(month_of_Birthday + 1);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos):
const anyo_of_birthday = birthday.getFullYear();
console.log(anyo_of_birthday);