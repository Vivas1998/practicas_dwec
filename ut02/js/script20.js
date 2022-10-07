function getFibonacciAt(n) {
    if(n<=1) {
        return n;
    }

    else {
        /*
        let num1 = 0;
        let num2 = 1;
        for(let i = 2; i<n; i++) {
            let suma = num1 + num2;
            num1 = num2;
            num2 = suma;
        }
        return num2;
        */
       return getFibonacciAt(n-1) + getFibonacciAt(n-2);
    }
}
let num1= parseInt(prompt("Introduce un numero"));
console.log(getFibonacciAt(num1));