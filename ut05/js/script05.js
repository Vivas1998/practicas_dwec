let puntuacion = document.querySelector('#score');
let ranking = [];
let s = 0;
let ms = 0;
let i = 0;
ranking.push({nombreJugador: '', puntos: ''});
ranking.push({nombreJugador: '', puntos: ''});
let difficult = document.querySelectorAll('.diff-level');

    
    let dificultadSel;
    let anchura = "";
    let altura = "";
comenzar();

function comenzar() {
    let empezar = document.querySelector('#btn-start'); //SELECCIONA EL BOTON START Y AÑADE LISTENERS 
    empezar.addEventListener('click', cuadro);
    empezar.addEventListener('click', timer);
    document.querySelector('#btn-reset').addEventListener('click', restart); // BOTON RESET 
    difficult.forEach((element) => {
        element.addEventListener('click', dificultad);
    });
    dificultadSel = document.querySelector('.selected').innerHTML;
    parseInt(dificultadSel);
}

function timer() {
    s = 0;
    ms = 0;
    aumentar();
    id = setInterval(aumentar, 10); // CREA EL INTERVALO
    document.querySelector('#btn-start').removeEventListener('click', cuadro); //ELIMINA LOS LISTENERS PARA NO PODER USAR EL BOTON START
    document.querySelector('#btn-start').removeEventListener('click', timer);
}

function aumentar() {
    let msAux;
    ms++;
    if(ms>99) {     //CUANDO MS ES MAYOR DE 99 AÑADE UN SEGUNDO Y RESETEA MS
        s++;
        ms=0;
    }
    if(ms < 10) {
        msAux = "0" + ms; // AÑADE UN 0 A LOS MS MENORES QUE 10
    }
    else {
        msAux = ms;
    }
    document.getElementById('time').innerHTML = s + '.' + msAux;    //SE MUESTRA EL TIEMPO EN PANTALLA
    if(s == 20) {
        stop();     //CUANDO EL TIEMPO LLEGA AL LIMITE (5) SE EJECUTA STOP
    }
}

function restart() {
    stop(); // EJECUTA STOP
}

function stop() {
    clearInterval(id); // LIMPIA EL INTERVALO QUE HAY
    actualizarRanking();
    if(document.getElementById('figura')) {
        document.getElementById('figura').remove();
    }
    i = 0; // REINICIA EL TIEMPO Y EL CONTADOR
    ms = 0;
    s = 0;
    document.querySelector('#btn-start').addEventListener('click', cuadro); // AÑADE LOS LISTENERS QUE SE HAN ELIMINADO ANTES
    document.querySelector('#btn-start').addEventListener('click', timer);
    comenzar();
}

function cuadro() {
    if(dificultadSel == 1)  {
        altura = Math.floor(Math.random() * (300-200+1)+200); // CALCULA EL TAMAÑO DE LA FIGURA
        anchura = Math.floor(Math.random() * (300-200+1)+200);
    }
    else if(dificultadSel == 2) {
        altura = Math.floor(Math.random() * (200-100+1)+100); // CALCULA EL TAMAÑO DE LA FIGURA
        anchura = Math.floor(Math.random() * (200-100+1)+100);
    }
    else if(dificultadSel == 3) {
        altura = Math.floor(Math.random() * (100-50+1)+50); // CALCULA EL TAMAÑO DE LA FIGURA
        anchura = Math.floor(Math.random() * (100-50+1)+50);
    }
    else if(dificultadSel == 4) {
        altura = Math.floor(Math.random() * (30-10+1)+10); // CALCULA EL TAMAÑO DE LA FIGURA
        anchura = Math.floor(Math.random() * (30-10+1)+10);
    }
    else if(dificultadSel == 5) {
        altura = Math.floor(Math.random() * (10-5+1)+5); // CALCULA EL TAMAÑO DE LA FIGURA
        anchura = Math.floor(Math.random() * (10-5+1)+5);
    }
    if (s == 20) {
        juego.remove();    // ELIMINA LA FIGURA
        i = 0;
    }
    else {
        let zonaJuegos = document.querySelector('#game-zone');
        let juego = document.createElement('div');
        puntuacion.textContent = i;     //MUESTRA EL SCORE
        i++;
        juego.classList.add('dibujo');  
        juego.id = 'figura';
        zonaJuegos.append(juego);       // AÑADE LA FIGURA A LA PANTALLA
        let jugar = document.getElementById('figura');
        jugar.style.width = `${anchura}px`; // DA EL TAMAÑO A LA FIGURA
        jugar.style.height = `${altura}px`;
        jugar.style.left = `${Math.floor(Math.random() * (zonaJuegos.clientWidth-anchura))}px`; //MARCA LOS MARGENES IZQUIERDO Y SUPERIOR PARA EVITAR QUE SALGA DE LA PANTALLA
        jugar.style.top = `${Math.floor(Math.random() * (zonaJuegos.clientHeight-altura))}px`;
        
        juego.addEventListener('click', function() {juego.remove();cuadro()}); 
        // CUANDO LE DAS A LA FIGURA ELIMINA EL JUEGO QUE HABIA Y EJECUTA CUADRO GENERANDO UN JUEGO NUEVO   
    }
}

function actualizarRanking() {
    let nombre = document.getElementById('player-input').value; //COMPRUEBA EL NOMBRE
    ranking.push({nombreJugador: nombre, puntos: puntuacion.innerHTML});  // AÑADE AL RANKING EL NOMBRE Y LA PUNTUACION
    let rankingOrden = ranking.sort((a,b) => {
        return a.puntos < b.puntos;
    });
    document.getElementById('ranking-first').firstChild.textContent = rankingOrden[0]['nombreJugador'];
    document.getElementById('ranking-first').lastChild.textContent = rankingOrden[0]['puntos'];
    document.getElementById('ranking-second').firstChild.textContent = rankingOrden[1]['nombreJugador'];
    document.getElementById('ranking-second').lastChild.textContent = rankingOrden[1]['puntos'];
    document.getElementById('ranking-third').firstChild.textContent = rankingOrden[2]['nombreJugador'];
    document.getElementById('ranking-third').lastChild.textContent = rankingOrden[2]['puntos'];
}

function dificultad(event) {
    difficult.forEach((element) => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected');
    comenzar();
}