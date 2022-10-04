function fact(numero) {
    let total = 1;
    for (let i=numero;i>0;i--) {
        total *= i;
    }
    return total;
}
let n = parseInt(prompt("Introduce un numero"));
console.log(fact(n));