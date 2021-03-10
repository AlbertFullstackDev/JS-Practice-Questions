//Create a new heading
const newHeading = document.createElement('h2');
newHeading.id = 'new-heading';
newHeading.classList.add('new-header');
const txt = document.createTextNode('Task List');
//Append txt to h2
newHeading.appendChild(txt);

const oldHeading = document.getElementById('task-title');
const parent = document.querySelector('.card-action')

//replace elements
parent.replaceChild(newHeading , oldHeading);

//remove elements
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

lis[1].remove()
list.removeChild(lis[0])

console.log(newHeading)

