let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]
function getAverage(arr){
    let array2 = [];
    arr.forEach(item => {
        let suma = 0;
        let cont = 0;
        for(let nota in item.notas){
            suma += item.notas[nota];
            cont++;
        } 
        let array = ["Alumno: " + item.nombre +" "+ item.ape1+" "+item.ape2 + ", expediente: " + item.expediente + ", nota media: " + suma/cont];
        array2.push(array);
    });
    return array2;
    }
console.log(getAverage(arr));