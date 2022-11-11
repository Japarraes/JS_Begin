function initMap() {
    // console.log("Inicializando mapa")
    const pos1 = {
        lat: 36.00534612925845,
        lng: -5.609909892291319
    }
    const pos2 = {
        lat: 36.71987641008329,
        lng: -2.1850723025088197
    }
    const pos3 = {
        lat: 36.72042679809433, 
        lng: -4.419330955096041
    }
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: pos1
    })

    marker1 = new google.maps.Marker({
        position: pos1,
        map,
        title: "Posición Uno"
    })
    marker2 = new google.maps.Marker({
        position: pos2,
        map,
        title: "Posición Uno"
    })
    marker3 = new google.maps.Marker({
        position: pos3,
        map,
        title: "Posición Uno"
    })

}

