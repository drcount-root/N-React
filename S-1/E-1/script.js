/*
// this is how to select the body element
const body = document.body;

// Manipulate the body element
body.style.backgroundColor = '#C4DFDF';
body.innerHTML = '<h1>Hello, world!</h1>';
*/

// creating heading
const heading = document.createElement("h1");
heading.innerHTML = `Hello World from JavaScript!`;

const root = document.getElementById('root');
root.appendChild(heading);  
