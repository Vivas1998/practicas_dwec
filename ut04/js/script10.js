let btn = document.getElementById("btn");
        
btn.addEventListener("click", (e) =>{
    let color = [];
    for (let i = 0; i < 3; i++) {
        color[i] = Math.trunc(Math.random() * 255);
    }
    document.getElementsByTagName("body")[0].style.background = `rgb(${color[0]},${color[1]},${color[2]})`;
});