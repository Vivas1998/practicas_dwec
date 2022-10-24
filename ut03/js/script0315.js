let array1 = [
    'Pablo',
    'Diego',
    'Dani',
    'Hugo'
];

function sendMenssage(arr) {
    arr.forEach(item => {
        console.log("Hola, " + item + ", bienvenido al curso de DWEC");
    });
}
console.log(sendMenssage(array1));