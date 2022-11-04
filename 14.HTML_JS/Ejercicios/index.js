const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("Se ha hecho click")
})

$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando JQuery")
    })
})