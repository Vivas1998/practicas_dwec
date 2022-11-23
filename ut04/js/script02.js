let element = document.getElementById("months");
let monthsName = Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
for(let i = 1; i<13; i++) {
    let div = document.createElement("div");
    div.classList.add('month');
    let div2 = document.createElement("div");
    div2.classList.add("month-number");
    let div3 = document.createElement("div");
    div3.classList.add("month-name");
    div2.textContent = i;
    div3.textContent = monthsName[i-1];
    element.append(div);
    div.append(div2);
    div.append(div3);
}

/*
let element = document.getElementById("months");
let monthsName = Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
for(let i = 1; i<13; i++) {
    element.innerHTML += `<div class='month'><div class='month-number'>${i}</div><div class='month-name'>${monthsName[i-1]}</div></div>`;
}
*/