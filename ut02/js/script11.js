do {
    let numero = parseInt(prompt("Introduce un numero valido"));
    if (numero > 0) { 
        parImpar = numero % 2;
        if(parImpar == 0) {
            console.log("El numero introducido es par");
        }
        else {
            console.log("El numero introducido es impar");
        }
        bucle = 2;
    }
    else {
        alert("Has introducido mal el numero, acepta e intentalo de nuevo");
        bucle = 1;
    }
}while (bucle == 1);