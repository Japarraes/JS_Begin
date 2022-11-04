// $(selector).accion()
// Ejemplos:
//$("li").hide()
//$("h1").hide()

// Para evitar que la página no esté cargada del todo, usamos este evento:
// $(document).ready(() => {
//
// })

// o su equivalente:
// $(() => {

// })

// Algunos ejemplos
$(() => {

    // $(".hide-btn").click(() => {
    //     $("h1").hide()
    // })
    // $(".show-btn").click(() => {
    //     $("h1").show()
    // })
    $(".hide-btn").click(() => {
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li")
        $("ul").prepend("<li>New Element</li")
    })

    $("li").mouseenter((elem) =>{
        elem.target.style.color = "blue"
    })
    $("li").mouseleave((elem) =>{
        elem.target.style.color = "black"
    })
})