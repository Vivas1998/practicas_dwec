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
});

tableItems = document.querySelectorAll('td');
tableItems.forEach((td) => {
    td.addEventListener('contextmenu', handleClick2);
});

function handleClick(event) {
    event.target.classList.toggle('selected');
}

function handleClick2(event) {
    event.target.classList.add('selectedSecond');
}