
// // Uncomment code sections to see how they function in the console.

let val;

const list = document.querySelector('ul.collection'); // // Parent list object.
const listItem = document.querySelector('li.collection-item:first-child'); // // Child list items.

// val = listItem;
val = list;

console.log(val);

// Get child nodes
val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

console.log(val);

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes // // You'll likely use this method more commonly than 'childNodes. Note that this method returns an HTML Collection rather than a node list. An HTML collection is an object with indices. In other words, an array.
val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

console.log(val);

// Children of children 
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

console.log(val);

// First child
val = list.firstChild;
val = list.firstElementChild;

console.log(val);

// Last child
val = list.lastChild;
val = list.lastElementChild;

console.log(val);

// Count child elements
val = list.childElementCount;

console.log(val);

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

console.log(val);

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);