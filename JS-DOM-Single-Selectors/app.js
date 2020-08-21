
// // *****Uncomment code elements as needed to see how they work in the console.***** 

// document.getElementById() // //The basic syntax for getting an element in the document. Simply fill in the required string as shown in the below example.

console.log(document.getElementById('task-title'));

// // Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className); // //This returns 'empty string' because this element does not yet have a class.

const taskTitle = document.getElementById('task-title'); // //Note that here we're creating a variable that helps us greatly shorten our code syntax so we don't have to keep repeating 'document.getElementByID'.  Good Pro Tip. :)

// // Change styling *****IMPORTANT NOTE - YOU SHOULDN'T BE USING JS DOM MANIPULATION METHODS TO CHANGE DOCMENT STYLING. IT'S BEST PRACTICE TO UTILIZE YOUR CSS FILES ACCORDINGLY.*****
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// // The querySelector method below is only capable of returning single items. You can traverse down into an object to target specific types, eg ul li but be aware this method only grabs the first instance of that type.
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

// // In the following examples, we'll utilize a string selector method that allows us to explicitly target items in a specific index position sharing the same type, eg. the list item type as shown below.

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
