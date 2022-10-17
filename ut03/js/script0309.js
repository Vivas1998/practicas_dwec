function removeVowels(str) {
    
    let result = str.replace(/[aeiouAEIOU]/g,'');
    return result;
    
}

let cadena = prompt("Introduce una cadena");
console.log(removeVowels(cadena));