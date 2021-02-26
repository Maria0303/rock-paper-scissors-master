let elements = document.getElementsByClassName('buttonPapel');

for (let el of elements) {
    el.addEventListener("click", eligePapel)
}

function eligePapel(event) {
    let ocultar=document.getElementById('circulos');
    ocultar.style.display='none';

}

/*function mostrarContainer() {
    var rules1 = document.getElementById("cajaReglas");
    rules1.classList.toggle("show");
}*/
