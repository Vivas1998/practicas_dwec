let div = document.getElementById('board');
div.innerHTML = "<table id='tabla'></table>";
let tabla = document.getElementById('tabla');
let letras = 'A B C D E F G H'.split(' ');
let num = '1 2 3 4 5 6 7 8'.split(' ');
for(let j=0; j<=9;j++) {
    let tr = document.createElement("tr");
    
    if(j <= 8) {
        let td = document.createElement("td");
        tr.append(td);
        td.textContent = num[j-1]; 
        if(j == 0) {
            td.textContent = "";
        }
        for(let i = 0;i<8;i++) {
            let td = document.createElement("td");
            if(j == 0) {
                td.textContent = letras[i];
            }
            if(i >= 0 && j > 0) {
                if(i%2 == 0) {
                    if (j%2 == 0) {
                        td.classList="casilla_negra";
                    }
                    else {
                        td.classList="casilla_blanca";
                    }
                }
                else {
                    if (j%2 != 0) {
                        td.classList="casilla_negra";
                    }
                    else {
                        td.classList="casilla_blanca";
                    }
                } 
                td.setAttribute("coord", letras[i]+","+num[j-1]);
                td.addEventListener("click", casillaPulsada);
            }
            tr.append(td);
        }

    }   
    tabla.append(tr);
}
tabla.append(div);

function casillaPulsada(event) {
    let h2 = document.createElement('h2');
    let br = document.createElement('br');
    h2 = "Has pulsado la casilla " + event.target.getAttribute("coord");
    div.append(h2);
    div.append(br);
}