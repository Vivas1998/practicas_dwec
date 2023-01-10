// Crear tabla y añadir el console.log que hay en la respuesta del json
const table = document.createElement('table');
document.body.append(table);
let tr = document.createElement('tr');
table.append(tr);
let td = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
td.textContent = 'Planeta';
td2.textContent = 'Diametro';
td3.textContent = 'Gravedad';
tr.append(td);
tr.append(td2);
tr.append(td3);
const url = "http://swapi.dev/api/planets";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        json.results.forEach(item => {
            console.log(`Nombre ${item.name}, Diametro ${item.diameter}, Gravedad ${item.gravity}`);
            let tr = document.createElement('tr');
            table.append(tr);
                td = document.createElement('td');
                td2 = document.createElement('td');
                td3 = document.createElement('td');
                tr.append(td);
                td.textContent = item.name;
                tr.append(td2);
                td2.textContent = item.diameter;
                tr.append(td3);
                td3.textContent = item.gravity;
        });
    })
    .catch((error) => {
        console.log(error);
    })