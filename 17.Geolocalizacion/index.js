let marker, map

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })

    // Obtener la geolocalizacion
    //marker.setPosition({ lat, lng })
    geoPosicion()
}

function geoPosicion() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        geoLoc.watchPosition(centrarMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centrarMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.error(error)
}
