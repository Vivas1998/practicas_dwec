function triangulo(a,b,c) {
    if(a + b > c && a + c > b && b + c > a) {
        return true;
    }
    else {
        return false;
    }
}
let lado1= parseInt(prompt("Introduce lado 1"));
let lado2 = parseInt(prompt("Introduce lado 2"));
let lado3 = parseInt(prompt("Introduce lado 3"));
console.log(triangulo(lado1,lado2,lado3));