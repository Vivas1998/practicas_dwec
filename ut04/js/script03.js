let numParrafo = document.getElementsByTagName('p').length;
let segEnlace = document.getElementsByTagName('a')[1].href;
let enlace = document.getElementsByTagName('a');
let nPalabras = document.getElementsByTagName('p')[1].textContent.trim().split(' ').length;
let cont = 0;
for (let i = 0; i<enlace.length; i++) {
    if(enlace[i].href == "https://www.google.es/") {
        cont++;
    }
}

let ej1 = document.getElementById('parrafos').append(numParrafo);
let ej2 = document.getElementById('segundo-enlace').append(segEnlace);
let ej3 = document.getElementById('links-google-es').append(cont);
let ej4 = document.getElementById('palabras-segundo-parrafo').append(nPalabras);