function isPrime(numero) {
    if(numero == 0 || numero == 1 || numero == 4) {
        return false
    }
    for (let x = 2; x < numero / 2; x++) {
        if(numero % x == 0) return false
    }
    return true;
}
let k = parseInt(prompt("Introduce un numero valido"));
for (let numero = 3; numero < k; numero++) {
    if(isPrime(numero)) {
        console.log("El numero " + numero + " es primo");
    }   
}