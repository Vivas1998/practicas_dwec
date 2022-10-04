do {
    let numero = parseInt(prompt("Introduce tu año de nacimiento"));
    if (numero <= 2010 && numero >= 1948) { 
        if(numero > 1948 && numero <= 1968) {
            console.log("Eres de la generacion del Baby Boom");
        }
        else if(numero >=1969 && numero <= 1980) {
            console.log("Eres de la Generacion X");
        }
        else if(numero >=1981 && numero <= 1993) {
            console.log("Eres de la Generacion Millenial");
        }
        else if(numero >=1994 && numero <= 2010) {
            console.log("Eres de la Generacion Z");
        }
        bucle = 2;
    }
    else {
        alert("Has introducido un año de nacimiento fuera de rango, acepta e intentalo de nuevo");
        bucle = 1;
    }
}while (bucle == 1);