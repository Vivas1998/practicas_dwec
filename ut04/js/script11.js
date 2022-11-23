let btn = document.getElementById("add-button");
let tareas = [];
let i = 0;
btn.addEventListener("click", (e) =>{
    let lista = document.querySelectorAll('ul')[0];
    let texto = document.getElementById("input-text").value;

    if(texto != ''){
        tareas[i] = texto;
        lista.innerHTML += `<li>${tareas[i]}</li>`;
        i++;
        document.getElementById("input-text").value = '';
    }
});
