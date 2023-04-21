function cargarDatos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarDatos(this);
        }
    };
    xhttp.open("GET", "Datos.xml", true);
    xhttp.send();
}

function mostrarDatos(xml) {
    var xmlDoc = xml.responseXML;
    var juegos = xmlDoc.getElementsByTagName("juego");
    var lista = document.getElementById("juegos");
    for (var i = 0; i < juegos.length; i++) {
        var juegos = juegos[i];
        var nombre = juegos.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var plataforma = juegos.getElementsByTagName("plataforma")[0].childNodes[0].nodeValue;
        var fecha = juegos.getElementsByTagName("fecha")[0].childNodes[0].nodeValue;
        var li = document.createElement("li");
        li.innerHTML = nombre + " - " + plataforma + " - " + fecha;
        lista.appendChild(li);
    }
}
