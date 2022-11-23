let table = document.createElement('table');
let body = document.querySelector('body');
for(let i = 0; i<10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for(let j = 0; j<10; j++) {
        let td = document.createElement('td');
        td.innerHTML = `${i}${j}`;
        tr.append(td);
    }
}
body.append(table);

tableItems = document.querySelectorAll('td');
tableItems.forEach((td) => {
    td.addEventListener('click', handleClick);
    td.onmousedown = function() {return false;}
});