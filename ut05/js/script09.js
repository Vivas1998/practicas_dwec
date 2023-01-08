// Ventana modal
let modal = document.getElementById("ventanaModal");
// Botón que abre el modal
let boton = document.getElementById("abrirModal");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];
// Fondo
let fondo = document.querySelector('.fondo');
// Botones
let login = document.querySelector('#login');
let registro = document.querySelector('#registro');
let formLogin = document.forms.loginForm;
let formRegistro = document.forms.registroForm;
// Elementos a evaluar 
// let usuarioRegistro = form.elements.usuarioRegistro;
let usuarioRegistro = formRegistro.elements.userRegistro;
let correoRegistro = formRegistro.elements.correoRegistro;
let contraseñaRegistro = formRegistro.elements.passwordRegistro;
let contraseña2Registro = formRegistro.elements.password2Registro;
// Botones
let botonRegistro = formRegistro.elements.registrar;
let botonLogin = formLogin.elements.logIn;
// Mensajes de error
let errorMail = document.querySelector('.errorEmail');
let errorContraseña = document.querySelector('.errorContraseñas');

botonRegistro.addEventListener('click', function() {
    console.log(usuarioRegistro.value);
    console.log(passwordRegistro.value);
});
botonLogin.addEventListener('click', function() {
    console.log(userLogin.value);
    console.log(passwordLogin.value);
});
// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener("click",function() {
    modal.style.display = "block";
    fondo.style.display = "block";
});
// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click",function() {
    modal.style.display = "none";
    fondo.style.display = "none";
});
login.addEventListener("click", function() {
    formLogin.style.display = "block";
    formRegistro.style.display = "none";
});
registro.addEventListener("click", function() {
    formLogin.style.display = "none";
    formRegistro.style.display = "block";
});


correoRegistro.onblur = function () {
    if(!correoRegistro.value.includes('@') || !correoRegistro.value.includes('.')) {
        errorMail.style.display = "block";
    }
}
correoRegistro.onfocus = function() {
    errorMail.style.display = "none";
}

contraseñaRegistro.onfocus = function() {
    errorContraseña.style.display = "none";
}
// --- CONTRASEÑA 2 ---
contraseña2Registro.onblur = function() {
    if(contraseñaRegistro.value != contraseña2Registro.value) {
        errorContraseña.style.display = "block";
    }
}
contraseña2Registro.onfocus = function() {
    errorContraseña.style.display = "none";
}

// Si el usuario hace clic fuera de la ventana, se cierra.
// window.addEventListener("click",function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// });