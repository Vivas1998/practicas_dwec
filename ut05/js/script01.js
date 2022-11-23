let listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
    li.addEventListener('click', handleClick);
    li.onmousedown = function() {return false;}
});

function handleClick(event) {
    if(event.ctrlKey) {
        event.target.classList.toggle('selected');
    }
    else {
        if(event.target.classList.contains('selected')) {
            listItems.forEach((li) => {
                li.classList.remove('selected');
            });
        }
        else {
            listItems.forEach((li) => {
                li.classList.remove('selected');
            });
            event.target.classList.add('selected');
        }
    }
}