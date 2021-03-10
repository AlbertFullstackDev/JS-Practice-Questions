//Creating an li element
const li = document.createElement('li');

//Add class to element
li.className = "collection-item";

//Add an id
li.id = "new-item";

//Add an attribute
li.setAttribute('title' , 'New Attribute')

//Add text node to li
const text = document.createTextNode('Hello World!');
li.appendChild(text);

//Creating a link
const link = document.createElement('a')

//Add class to link
link.className = 'delete-item secondary-content';

//Adding href attribute
link.setAttribute('href','#');

//Adding innerHtml to link
link.innerHTML = '<i class="fa fa-remove"></i>';

//Adding link to li
li.appendChild(link);

//Adding li to ul
const ul = document.querySelector('ul.collection');
ul.appendChild(li);

//Adding background gray
li.style.background = "#333";

//console.log(link);