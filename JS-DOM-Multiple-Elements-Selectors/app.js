
// // *****Uncomment code segments as needed to see how they function in the console.*****


// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// // document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

console.log(lis);

// // Convert HTML Collection into array
lisArr = Array.from(lis);

lisArr.reverse(); // // This works because 'reverse' is an array method and we converted our original 'lis' variable into a new 'lisArr' variable.

// // Just for kicks we can use a forEach loop to change the text of the list items to 'Hello'.

// lisArr.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lisArr);

// document.querySelectorAll // // While this does technically return a 'node list' we are able to perform some array type methods on it. Immportant to note that this only works on the 'querySelectorAll' method.

const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items); // // Note that this is a 'node list'.

// // Here we can see that we're able to perform an array method 'forEach' on our object because it originates from the 'querySelectorAll' method.  A unique exception condition.

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

console.log(items);

// // Here's a clever use case where we'll create array variables holding odd and even rows of our list items.  Then we'll alternate the colors with a style update.

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// // Using the 'forEach' method.
liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

// // Doing the same thing but using the for loop method.
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
