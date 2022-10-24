let arr = [2, 58, 4, 19];

arr.sort((a,b) => {
    if(parseInt(a)< parseInt(b)) {
        return -1;
    }
    else {
        return 1;
    }
    //1 si a>b
    //0 si a=b
    //-1 si a<b
    return
})
console.log(arr);

/*
let arr = [4, 6, 23, 765, 23, 54, 13];

let arr2 = arr.map((item,index,arr)=> {
    return item**2;
});
console.log(arr);
console.log(arr2);
*/
/*
let cadena = "Hola mundo";
let array = cadena.split('')
                  .filter(item => !'aeiouAEIOU'.includes(item))
                  .join('');
console.log(array);
*/



/*
let remove = [];
let i = 0;
eliminar.forEach(function (item, eliminar) {
    if(item == 'a' || item == 'e'|| item == 'i'|| item == 'o' || item == 'u') {
        remove = eliminar.i;
    }
    i++;
});
*/



/*
let arr = [
    {nombre: 'Victor', curso: 1, ciclo:'DAW'},
    {nombre: 'Pepe', curso: 2, ciclo:'SMR'},
    {nombre: 'Luis', curso: 1, ciclo:'DAW'},
    {nombre: 'Andres', curso: 1, ciclo:'ASIR'},
];
let smr = arr.filter((item) => {
    return item.ciclo == 'SMR' && item.curso == 2;
});
console.log(smr);
*/