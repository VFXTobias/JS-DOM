
// Exploring the entire Document Object Model. See the log results in the console to be see the various elements returned.

let val;

val = document;
console.log(val);
val = document.all;
console.log(val);
val = document.all[1]; // You can specify an index value in the object to return specific elements, eg [0] will return just the HTML element while [1] will return the head element and so on.
console.log(val);
val = document.all.length; 
console.log(val);
val = document.head;
console.log(val);
val = document.body;
console.log(val);
val = document.doctype;
console.log(val);
val = document.domain;
console.log(val);
val = document.URL;
console.log(val);
val = document.characterSet;
console.log(val);
val = document.contentType;
console.log(val);

val = document.forms;
console.log(val);
val = document.forms[0];
console.log(val);
val = document.forms[0].id;
console.log(val);
val = document.forms[0].method;
console.log(val);
val = document.forms[0].action;
console.log(val);

val = document.links;
console.log(val);
val = document.links[0];
console.log(val);
val = document.links[0].id;
console.log(val);
val = document.links[0].className;
console.log(val);
val = document.links[0].classList[0];
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);
val = document.scripts[2].getAttribute('src');
console.log(val);

let scripts = document.scripts;
console.log(scripts);

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(scriptsArr);