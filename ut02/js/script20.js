function getFibonacciAt(n) {
    let r = 1;
    if(n<=1) {
        return n;
    }

    else {
        for(let i = 2; i<=n; i++) {
            r += n-i;
            
        }
        return r;
    }
    
    
}
let num1= parseInt(prompt("Introduce un numero"));
console.log(getFibonacciAt(num1));