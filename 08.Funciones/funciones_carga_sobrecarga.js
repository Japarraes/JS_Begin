// Carga y sobrecarga de funciones
function saludar() {
    hola();
}

function hola() {
    console.log("Hola, soy la función hola");
}

saludar();

// 1. global()
// 2. saludar() global()
// 3. hola() saludar() global()
// 3. saludar() global()
// 3. global()

