function isPrime(numero) {
    if(numero == 0 || numero == 1 || numero == 4) {
        return false
    }
    for (let x = 2; x <= numero**1/2; x++) {
        if(numero % x == 0) return false;
    }
    return true;
}
let numero = parseInt(prompt("Introduce un numero valido"));
console.log(isPrime(numero));