function convertCapacity(capacity, from, to) {
    resultado = 0;
    switch(from, to) {
        case "b", "kb":
            return capacity * 1e3;
            break;
        case "b", "mb":
            return capacity * 1e6;
            break;
        case "b", "gb":
            return capacity * 1e9;
            break;
        case "b", "tb":
            return capacity * 1e12;
            break;
        case "b", "pb":
            return capacity * 1e15;
            break;
        case "b", "eb":
            return capacity * 1e18;
            break;
    
        case "kb", "b":
            return capacity / 1e3;
            break;
        case "kb", "mb":
            return capacity * 1e3;
            break;
        case "kb", "gb":
            return capacity * 1e6;
            break;
        case "kb", "tb":
            return capacity * 1e9;
            break;
        case "kb", "pb":
            return capacity * 1e12;
            break;
        case "kb", "eb":
            return capacity * 1e15;
            break;
        
        case "mb", "b":
            return capacity / 1e6;
            break;
        case "mb", "kb":
            return capacity / 1e3;
            break;
        case "mb", "gb":
            return capacity * 1e3;
            break;
        case "mb", "tb":
            return capacity * 1e6;
            break;
        case "mb", "pb":
            return capacity * 1e9;
            break;
        case "mb", "eb":
            return capacity * 1e12;
            break;
    
        case "gb", "bb":
            return capacity / 1e9;
            break;
        case "gb", "kb":
            return capacity / 1e6;
            break;
        case "gb", "mb":
            return capacity / 1e3;
            break;
        case "gb", "tb":
            return capacity * 1e3;
            break;
        case "gb", "pb":
            return capacity * 1e6;
            break;
        case "gb", "eb":
            return capacity * 1e9;
            break;
        
        case "tb", "b":
            return capacity / 1e12;
            break;
        case "tb", "kb":
            return capacity / 1e9;
            break;
        case "tb", "mb":
            return capacity / 1e6;
            break;
        case "tb", "gb":
            return capacity / 1e3;
            break;
        case "tb", "pb":
            return capacity * 1e3;
            break;
        case "tb", "eb":
            return capacity * 1e6;
            break;
        
        case "pb", "b":
            return capacity / 1e15;
            break;
        case "pb", "kb":
            return capacity / 1e12;
            break;
        case "pb", "mb":
            return capacity / 1e9;
            break;
        case "pb", "gb":
            return capacity / 1e6;
            break;
        case "pb", "tb":
            return capacity / 1e3;
            break;
        case "pb", "eb":
            return capacity * 1e18;
            break;
            
        case "eb", "b":
            return capacity / 1e18;
            break;
        case "eb", "kb":
            return capacity / 1e15;
            break;
        case "eb", "mb":
            return capacity / 1e12;
            break;
        case "eb", "gb":
            return capacity / 1e9;
            break;
        case "eb", "tb":
            return capacity / 1e6;
            break;
        case "eb", "pb":
            return capacity / 1e3;
            break;
            
            
    }
}

let capacidad = parseInt(prompt("Introduce el tamaño"));
let medida = prompt("Introduce la unidad de medida");
let medida2 = prompt("Introduce la medida a la que quieres transformar " + medida)
console.log(convertCapacity(capacidad,medida,medida2));