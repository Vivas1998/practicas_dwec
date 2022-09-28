let n = parseInt(prompt("Introduce un numero para la tabla de multiplicar"));
let k = parseInt(prompt("Introduce un numero para establecer la longitud de la tabla"));
for(let i= 1; i<=k; i++) {
    let resultado = n*i;
    console.log(n +" * " + i + " = " + resultado);
}