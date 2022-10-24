let array1 = [1, 4, 5, 34, 75, 2];
let array2 = [];
function getOdd(arr) {
    arr.forEach(item => {
        if(item % 2 != 0) {
            console.log(item);
        }
    });
}
console.log(getOdd(array1));