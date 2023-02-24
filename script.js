let navItem = document.querySelectorAll('li a');
let pageName = document.querySelector('section h2');
let title = document.querySelector('title');

console.log(navItem);
navItem.forEach(e => {
    if(pageName.innerHTML == e.innerHTML){
        title.innerHTML = e.innerHTML;
        e.style.background = 'black';
        e.style.color = 'white';
    }
});