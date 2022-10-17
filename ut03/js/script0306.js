function convertBase(str, baseFrom, baseTo) {
    str.toString(baseFrom);
    str.toString(baseTo);
}

let cadena = parseInt(prompt("Introduce una cadena"));
let base = parseInt(prompt("Introduce la base de la cadena"));
let base2 = parseInt(prompt("Introduce la base a la que quieres transformar la cadena"));

console.log(parseInt((convertBase(cadena, base, base2))));