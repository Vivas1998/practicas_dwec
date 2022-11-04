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
function mayuscula(str) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toUpperCase())
            return true;
    }
    return false;
}

function minuscula(str) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase())
            return true;
    }
    return false;
}

function numero(str) {
    for (let i = 0; i < str.length; i++) {
        if(Number.isInteger(Number(str[i])))
            return true;
    }
    return false;
}

function getUnsecurePass(arr) {
    let array2 = []
    arr.forEach(item => {
        if(mayuscula(item.pass) && minuscula(item.pass) && numero(item.pass) && item.pass.length > 7) {
            let array = [item.nombre +" "+ item.ape1+" "+item.ape2];
            array2.push(array);
        }
    })
    return array2;
}

console.log(getUnsecurePass(arr));