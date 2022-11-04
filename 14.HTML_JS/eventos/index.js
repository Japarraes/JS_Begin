const hTexto = document.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    // Creamos el evento
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })

    // Lanzamos el evento sobre el elemento "hTexto"
    hTexto.dispatchEvent(evento)
}