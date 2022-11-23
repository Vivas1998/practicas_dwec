let cont = document.getElementsByClassName("images")[0];
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) =>{
    let imagenes = document.querySelectorAll("img");
    let imagenes2 = Array.from(imagenes);
    imagenes2.sort(() => 0.75 - Math.random());
    
    cont.innerHTML = imagenes2.reduce((acum,item) => acum + item.outerHTML,'');
});