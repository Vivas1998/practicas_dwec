let array1 = [1, 3, 5];
let array2 = [1, 2, 4, 9];
let pow = 4;

function createPow (arr,pow) {
    return arr.map(item => item**pow);
}

/*
function createPow(arr,pow) {
    let arr = [];
    arr.forEach(item => {
        arr.push(item**pow);
    });
    return arr;

}
*/
console.log(createPow(array1,4));