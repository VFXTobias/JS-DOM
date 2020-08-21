
// // Event listeners work by first using a querySelector to target an element on the page, eg. our 'Clear Tasks' button and then utiliziing a method called 'addEvenListener.  The latter takes two parameters.  The first is the action on the element, eg. 'click'.  The second is an anonymous function that we call to do something.

// *****IMPORTANT*****
// // In the example below the console.log would flash and disappear if our 
// // 'href' tag in the <a> element was blank.  To get around this we'll pass in an event handler object called 'e'.  There's a method on 'e' called 'preventDefault' that allows us to prevent the default behavior which in our case would refresh the page AND clear the log. We're preventing the latter. Alternatively you could simply set the href to '#'.

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   e.preventDefault();
// });

// // Let's take another approach and used a named function purely for readability sake. We'll create 'onClick' rather than something anonymous.  Now it's easy to spot in our code further down the line.

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // // Now uncomment the various lines below to how each of them functions in the console.

  // Event target element
  val = e.target;
  // val = e.target.id;
  // val = e.target.className;
  // val = e.target.classList;

  // // Event type
  // val = e.type;

  // // Timestamp
  // val = e.timeStamp;

  // // Coords event relative to the window
  // val = e.clientY;
  // val = e.clientX;

  // // Coords event relative to the element
  // val = e.offsetY;
  // val = e.offsetX;

  console.log(val);
}