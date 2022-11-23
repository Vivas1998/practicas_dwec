let cont = document.getElementsByClassName('images')[0];
let btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    let imagenes = document.querySelectorAll('img');
    cont.prepend(imagenes[4]);
});