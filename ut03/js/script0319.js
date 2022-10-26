let arr = [1, 5, 15, 24, 49, 29, 18];

let b = arr.reduce( function(acum, item) {
    if(acum < item) {
        acum = item;
    }
    return acum;
}, 0);

/*
function max (arr) {
    let max = arr.reduce(acum, item => {
        return (item>acum) ? item : acum;
    }, arr[0]);
    return max;
}
*/
console.log(b);