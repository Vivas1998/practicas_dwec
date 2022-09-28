do {
    let numero = parseInt(prompt("Introduce un numero valido"));
    if (numero < 0 || numero >= 0) { 
        console.log("Has introducido el numero " + numero);
        bucle = 2;
    }
    else {
        alert("Has introducido mal el numero, acepta e intentalo de nuevo");
        bucle = 1;
    }
}while (bucle == 1);