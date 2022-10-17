function countVowels(str) {
    let strMinus = str.toLowerCase().replace(/\s+/g, '');
    let objeto = {};
    for(let i in strMinus) {
        objeto[strMinus[i]] = (objeto[strMinus[i]] || 0) +1;
    }
    return objeto;
}

let cadena = prompt("Introduce una cadena");
console.log(countVowels(cadena));