let nombre = prompt("Introduce tu usuario");
let contraseña = prompt("Introduce tu contraseña");

let user = {
    username : nombre,
};

let pass = {
    password : contraseña,
};

function mergeObject(a, b) {
    let login = {
        ...user,
        ...pass,

    };
    return login;
}
console.log(mergeObject(user,pass));