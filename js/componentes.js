
document.addEventListener("DOMContentLoaded", function () {

    cargar("menu", "componentes/menu.html");
    cargar("footer", "componentes/footer.html");

});

function cargar(id, archivo){

    fetch(archivo)
        .then(respuesta => respuesta.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });

}
