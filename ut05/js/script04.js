//Crear titulo
let i = 0;
let divTitulo = document.createElement('div');
let body = document.querySelector('body');
divTitulo.classList.add('titulo');
let titulo = document.createElement('h1');

divTitulo.append(titulo);
body.append(divTitulo);

// Crear div juego


// Crear juego
cuadro();

function cuadro() {
    titulo.innerHTML = i;
    i++;
    let divJuego = document.createElement('div');
    divJuego.classList.add('juego');
    body.append(divJuego);
    let juego = document.createElement('div');
    juego.classList.add('dibujo');
    juego.id = 'figura';
    innerHeight = Math.random()*250;
    innerWidth = Math.random()*250;
    marginIzq = Math.random()*1300;
    marginTop = Math.random()*300;
    divJuego.append(juego);
    document.getElementById('figura').style.height = innerHeight + "px";
    document.getElementById('figura').style.width = innerWidth + "px"; 
    document.getElementById('figura').style.marginLeft = marginIzq + "px";
    document.getElementById('figura').style.marginTop = marginTop + "px";
    
    let jugar = document.getElementById('figura')
    jugar.addEventListener('click', function() {divJuego.remove();cuadro()});
    
}