function operacion(num1, num2, operador) {
    let resultado = 0;
    switch(operador) {
        case "+":
            resultado = num1 + num2;
            return resultado;
            break;
        case "-":
            resultado = num1 - num2;
            return resultado;
            break;
        case "*":
            resultado = num1 * num2;
            return resultado;
            break;
        case "/":
            resultado = num1 / num2;
            return resultado;
            break;
        case ">":
            resultado = num1 > num2;
            return resultado;
            break;
        case "<":
            resultado = num1 < num2;
            return resultado;
            break;
        default:
            return "No se puede realizar la operacion";
    }
}
let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce un numero"));
let operador = prompt("Introduce un operador");
console.log(operacion(num1,num2,operador));