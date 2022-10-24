function replaceWithposition(str) {
    for(let i of str) {
        let base = parseInt(i,36) - 9; 
        console.log(i + ': ' + base);
    }
    return base;
}
let cadena = prompt("Introduce una cadena");
console.log(replaceWithposition(cadena));