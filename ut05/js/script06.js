let alfabeto = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z".split(" ");
let muestra = [];
let palabra = [];

letras();
buscarPalabra();
let tecla = "";

function letras() {
    let teclado = document.getElementById('keyboard');
    alfabeto.forEach(element => {
        teclado.innerHTML += `<span class='key'>${element}</class>`;
    });
    let letraEvent = document.querySelectorAll('.key');
    letraEvent.forEach (element => {
        element.addEventListener('click', click);
    });
    document.addEventListener('keydown', function (event) {
        tecla = event.key;
        comprobacion();
    });
}
function click() {
    let letraEvent = document.querySelector('.key').textContent;
    tecla = letraEvent.textContent;
    console.log(tecla);
    seleccion(tecla);
    comprobacion();
}
function buscarPalabra() {
    let numpalabra = Math.trunc(Math.random()*words.length);
    let indice = words[numpalabra];
    console.log(indice);
    console.log(indice.length);
    palabra = indice.split("");
    console.log(palabra);
    spaces(indice);
}

function comprobacion() {
    let element = tecla;
    console.log(element);
    let idx = palabra.indexOf(element);
    while (idx != -1) {
        muestra.push(idx);
        idx = palabra.indexOf(element, idx + 1);
    }
    console.log(muestra);
}
function spaces(index) {
    let divEspacios = document.getElementById('spaces');
    for(let i = 0; i<index.length;i++) {
        divEspacios.innerHTML += `<span class='space'></class>`;
    }
}
function seleccion(index) {
    index.classList.add('selected');
    index.removeEventListener('click', );
}




/* 
    Mostrar tecla segun la posicion de muestra[] en los espacios
    Marcar la clase como selecionada .red .green en funcion de si estan o no en la muestra[]
    Meter las imagenes en un bucle y que vaya aumentando 1 cada vez que se selecciona la clase .red
    
*/