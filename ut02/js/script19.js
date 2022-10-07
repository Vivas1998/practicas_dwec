function sumOfMults(n,k) {
    let r = 0;
    for(let i = 0; i<=n; i++) {
        r += (k*i);
    }
    return r;
}
let num1 = parseInt(prompt("Introduce numero 1"));
let num2 = parseInt(prompt("Introduce numero 2"));
console.log(sumOfMults(num1,num2));