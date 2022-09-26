let precioManzanas = parseInt(prompt("Indica €/kg de manzanas"));
let cantidadManzanas = parseInt(prompt("Indica los kilos de manzanas"));
let precioNaranjas = parseInt(prompt("Indica €/kg de naranjas"));
let cantidadNaranjas = parseInt(prompt("Indica los kilos de naranjas"));
let precioPlatanos = parseInt(prompt("Indica €/kg de platanos"));
let cantidadPlatanos = parseInt(prompt("Indica los kilos de platanos"));

kilosFruta = cantidadManzanas + cantidadNaranjas + cantidadPlatanos;
coste = (precioManzanas * cantidadManzanas) + (precioNaranjas * cantidadNaranjas) + (precioPlatanos * cantidadPlatanos);

console.log("Has comprado un total de " + kilosFruta + " kilos de fruta y te ha costado " + coste + " euros");
