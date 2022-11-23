let element = document.getElementById("numbers");
for(let i=1; i<31; i++) {
    let span = document.createElement("span");
    span.classList.add('number');
    element.append(span);
    span.textContent = i;
}
/*
let element = document.getElementById("numbers");
for(let i=1; i<31; i++) {
    element.innerHTML += `<span class='number'>${i}</span>`;
}
*/