function convertToBytes (capacity, from) {
    let resultado = 0;
    switch (from) {
        case "b":
            resultado = capacity * 1;
            return resultado;
            break;
        case "kb":
            resultado = capacity * 1e3;
            return resultado;
            break;
        case "mb":
            resultado = capacity * 1e6;
            return resultado;
            break;
        case "gb":
            resultado = capacity * 1e9;
            return resultado;
            break;
        case "tb":
            resultado = capacity * 1e12;
            return resultado;
            break;
        case "pb":
            resultado = capacity * 1e15;
            return resultado;
            break;
        case "eb":
            resultado = capacity * 1e18;
            return resultado;
            break;
    }
}let capacidad = parseInt(prompt("Introduce el tamaño"));
let medida = prompt("Introduce la unidad de medida");
console.log(convertToBytes(capacidad,medida));