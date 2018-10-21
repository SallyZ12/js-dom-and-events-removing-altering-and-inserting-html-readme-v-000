//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded


var element = document.createElement('div');
//creates new element 'div'

element.innerHTML = 'Hello, DOM!';
//adds 'Hello, Dom! to innerHTML of div

element.style.backgroundColor = '#f9f9f9';
//colors the background of div createElement

//to get above to be part of DOM - append
document.body.appendChild(element);

//center the element
element.style.textAlign = 'center';

//append elements to the above element
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

//align the ul list to the left
ul.style.textAlign = 'left';

//remove an element
ul.removeChild(ul.querySelector('li:nth-child(2)'));
//this removed second element

//remove all of element - call on itself
ul.remove();
