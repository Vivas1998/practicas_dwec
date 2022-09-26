let nombre = prompt("Indica tu nombre");
let notaExamen1 = parseInt(prompt("Indica tu nota del primer examen"));
let notaExamen2 = parseInt(prompt("Indica tu nota del segundo examen"));
let notaMedia = (notaExamen1 + notaExamen2) / 2;
console.log("Hola " + nombre + ", la nota media de tus examenes es " + notaMedia);