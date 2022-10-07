function isPrime(numero) {
    if(numero == 0 || numero == 1 || numero == 4) {
        return false
    }
    for (let x = 2; x < numero **1/2; x++) {
        if(numero % x == 0) return false
    }
    return true;
}
let k = parseInt(prompt("Introduce un numero valido"));
let imp = 0;
let numero = 1;
let cont = 1;
while(k != imp) {
    if(isPrime(cont)) {
        console.log("El numero " + cont + " es primo");
        imp++;
    }
    cont++;
}




//    for (let numero = 3; numero < k; numero++) {
//        if(isPrime(numero)) {
//            console.log("El numero " + numero + " es primo");
//        }   
//    }