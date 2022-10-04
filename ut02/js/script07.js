let n = parseInt(prompt("Introduce un numero para el triangulo de asteriscos"));

for (let i = 0; i < n; i++) {
    let piso = '';
    for (let j = 0; j < i + 1; j++) {
      piso = piso + '*';
    }
    console.log(piso)
  }