let num1 = parseInt(prompt("Introduce 5 numeros"));
let num2 = parseInt(prompt());
let num3 = parseInt(prompt());
let num4 = parseInt(prompt());
let num5 = parseInt(prompt());
    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        console.log("El numero 1 es el mayor");
    }
    else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        console.log("El numero 2 es el mayor");
    }
    else if(num3 > num1 && num3 > num1 && num3 > num4 && num3 > num5) {
        console.log("El numero 3 es el mayor");
    }
    else if(num4 > num1 && num4 > num3 && num4 > num1 && num4 > num5) {
        console.log("El numero 4 es el mayor");
    }
    else if(num5 > num1 && num5 > num3 && num5 > num4 && num5 > num1) {
        console.log("El numero 5 es el mayor");
    }
    if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
        console.log("El numero 1 es el menor");
    }
    else if(num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        console.log("El numero 2 es el menor");
    }
    else if(num3 < num2 && num3 < num1 && num3 < num4 && num3 < num5) {
        console.log("El numero 3 es el menor");
    }
    else if(num4 < num2 && num4 < num3 && num4 < num1 && num4 < num5) {
        console.log("El numero 4 es el menor");
    }
    else if(num5 < num2 && num5 < num3 && num5 < num4 && num5 < num1) {
        console.log("El numero 5 es el menor");
    }