const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")
const papelera = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

    })
    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
        //console.log("Drag Over")
    })
    seccion.addEventListener("drop", event => {
        //console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        console.log(id_parrafo)
        console.log(parrafo)
        seccion.removeChild(parrafo)
    })
})

papelera.forEach(basura => {
    basura.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })
    basura.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.parentNode.removeChild(parrafo)
    })
})
