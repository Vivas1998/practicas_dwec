// ---------------- VARIABLES -----------
let form = document.forms.formulario;
let correoInput = form.elements.correo;
let contraseñaInput = form.elements.contraseña;
let contraseña2Input = form.elements.contraseña2;
let enviar = form.elements.enviar;
let error = document.querySelector('#error');
let errorContraseña = document.querySelector('#error2');
let seguridad = document.querySelector('#seguridad');

// --------------- EJECUCION ------------
// ------ CORREO ------
correoInput.onblur = function () {
    if(!correoInput.value.includes('@') || !correoInput.value.includes('.')) {
        error.innerHTML = "Introduzca un correo valido";
    }
}
correoInput.onfocus = function() {
    error.innerHTML = "";
}
// ------ CONTRASEÑAS ------ 
// --- CONTRASEÑA 1 ---
contraseñaInput.onblur = function() {
    if(contraseñaInput.value != contraseña2Input.value) {
        errorContraseña.innerHTML = "Las contraseñas no coinciden";
    }
}
contraseñaInput.onfocus = function() {
    errorContraseña.innerHTML = "";
}
// --- CONTRASEÑA 2 ---
contraseña2Input.onblur = function() {
    if(contraseñaInput.value != contraseña2Input.value) {
        errorContraseña.innerHTML = "Las contraseñas no coinciden";
    }
}
contraseña2Input.onfocus = function() {
    errorContraseña.innerHTML = "";
}

// --- SEGURIDAD CONTRASEÑA ---
// contraseñaInput.onfocus = function() {
    
// }

// ------ ENVIAR ------
enviar.addEventListener('click', function() {
    console.log(correoInput.value);
    console.log(contraseñaInput.value);
});

// ----- PRUEBAS -----
function contra() {
    errorContraseña.innerHTML = "";
    if(contraseñaInput.value.length > 0 && contraseñaInput.value.length < 4) {
        seguridad.innerHTML = "Poco segura";
    }
    else if(contraseñaInput.value.length >= 4 && contraseñaInput.value.length < 11) {
        seguridad.innerHTML = "Segura";
    }
    else if(contraseñaInput.value.length >= 11 ) {
        seguridad.innerHTML = "Muy segura";
    }
    else {
        seguridad.innerHTML = "No es segura";
    }

}