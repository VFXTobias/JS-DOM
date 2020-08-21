// REPLACE ELEMENT
// // We'll replace the H5 'Task List' element with a new H2 version.

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading); // // The 'replaceChild' method only works on PARENT elements.  This is why we created the 'carAction' variable above so we could eventually target our old heading element.

// REMOVE ELEMENT
const lis = document.querySelectorAll('li'); // // This is a collection, eg Array.
const list = document.querySelector('ul'); // // This is a single element.

console.log(lis); // // It's a NodeList result but it's actually an indexed Array.  See console.  This is important to remember about the 'querySelectorAll' method.
console.log(list);


// Remove list item
lis[0].remove(); // // Remember that we're able to utilize ARRAY methods on variables originating from 'querySelectorAll.

// Remove child element
list.removeChild(lis[3]); // // Try not to be confused and think that you're performing an array method on 'list'.  You're not.  'list' is a single element that contains a child array that we created called 'lis'.  Notice how we're referencing an indexed item in 'lis' which is simply a collection child of 'list'.  Hence, we can target with specificity the 4th list item. 0,1,2,3. 

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes // // Let's iterate through different methods available for classes.  Comment and uncomment each line as you wish to see the results.

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes // // The infamous 'getters and setters' methods.  Comment and uncomment each line as you wish to see the various results.

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

