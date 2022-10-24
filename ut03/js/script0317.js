let array1 = [1, 3, 5];
let array2 = [1, 2, 4, 9];
let pow = 4;
function createPow(arr) {
    arr.forEach(item => {
        console.log(item**pow);
    });
}
console.log(createPow(array1));