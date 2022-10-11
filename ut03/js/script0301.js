let nombre = prompt("Introduce tu nombre");
let edad = parseInt(prompt("Introduce tu edad"));


let user = {
    name: nombre,
    age: edad,
};

function usuario(a) {
    let clone = Object.assign({}, a);
    return clone;
};
console.log(usuario(user));