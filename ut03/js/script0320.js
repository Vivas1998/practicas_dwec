let array1 = ['24-05-2020', '02-12-2018', '14-02-2020', ];

function sortDates(arr) {
    arr.sort((a,b) => {
        let strA = a.slice(6) + a.slice(3,5) + a.slice(0,2);
        let strB = b.slice(6) + b.slice(3,5) + b.slice(0,2);
        return strA < strB ? -1 : 1;
    });
    console.log(arr);
}
console.log(sortDates(array1));
