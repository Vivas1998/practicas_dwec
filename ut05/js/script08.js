let valor1;
let valor2;
let form = document.forms.formulario;
let comunidad = form.elements.comunidades;
let provincia = form.elements.provincia;
let municipio = form.elements.municipio;
comunidad.innerHTML += `<option disabled selected>--- Elige comunidad autonoma ---</option>`
provincia.innerHTML += `<option disabled selected>--- Elige provincia ---</option>`
municipio.innerHTML += `<option disabled selected>--- Elige municipio ---</option>`
comunidades.forEach(element => {
    comunidad.innerHTML += `<option>${element['nombreComunidad']}</option>`
});

comunidad.onblur = function() {
    valor1 = comunidad.value;
    comunidades.forEach(element => {
        if(valor1 == element['nombreComunidad']) {
            element.provincias.forEach(element2 => {
                console.log(element2['nombreProvincia']);
                provincia.innerHTML += `<option>${element2.nombreProvincia}</option>`;
            });
        }
    });
}
provincia.onblur = function() {
    valor2 = provincia.value;
    console.log(valor2);
    console.log(valor1);
    comunidades.forEach(element => {
        if(valor1 == element['nombreComunidad']) {
            element.provincias.forEach(element2 => {
                if(valor2 == element2['nombreProvincia']) {
                    element2.localidad.forEach(element3 => {
                        console.log(element3['nombreLocalidad']);
                        municipio.innerHTML += `<option>${element3.nombreLocalidad}</option>`;
                    });
                }
            });
        }
    });
}