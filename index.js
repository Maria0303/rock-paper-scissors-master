let elements = document.getElementsByClassName('buttonPapel');

for (let el of elements) {
    el.addEventListener("click", eligePapel)
}

function eligePapel(event) {
    let ocultar=document.getElementById('circulos');
    ocultar.style.display='none';

}
