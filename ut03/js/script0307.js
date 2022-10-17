function countVowels(str) {
    let strMinus = str.toLowerCase();
    let contador = 0;
    for(let vocales of strMinus) {
        if(vocales == "a" || vocales == "e" || vocales == "i" || vocales == "o" || vocales == "u") {
            contador++;
        }
    }
    return contador;
    
}

let cadena = prompt("Introduce una cadena");
console.log(countVowels(cadena));