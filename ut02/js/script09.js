let calle = prompt("Introduce la calle a la que desees ir");

    if(calle == "Calle Los Claveles" || calle=="Calle El Rosal" || calle=="Calle Las Hortensias" || calle=="Calle Las Margaritas") {
        console.log("Tienes que tomar la linea 1 para ir a " + calle);
    }
    else if(calle == "Calle Teleno" || calle=="Calle Catoute" || calle=="Calle Peña Ubiña" || calle=="Calle Vizcodillo") {
        console.log("Tienes que tomar la linea 2 para ir a " + calle);
    }
    else if(calle == "Calle Astorga" || calle=="Calle La Bañeza" || calle=="Calle Benavente") {
        console.log("Tienes que tomar la linea 3 para ir a " + calle);
    }
    else {
        console.log("Lo siento, no te podemos ayudar");
    }