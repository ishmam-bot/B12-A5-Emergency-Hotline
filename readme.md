Ans to the Q/no -1 

The getElementById, getElementsByClassName, and querySelector / querySelectorAll are all DOM methods in Javascript programming.
getElementById() selects only a single element which is an Id attribute like <div id="main" class="box"></div>
On the other hand  getElementsByClassName() uses class's, thus it can select multiple  elements with the same class
like <div class="box">tackklle</div>
<div class="box">Boien</div>.
The querySelector() selects the first element that matches a CSS selector like a class name, but uses ".box", and on the other hand querySelectorAll() selects all the elements with the   same class in the same way

Ans to the Q/no-2

It is created by using a document.createElement(tagName) to make a new element for example

const newDiv = document.createElement("div"); // creates <div></div>

newDiv.className = "my-class";               // adds a class
newDiv.id = "myId";                          // adds an id

 now by using the parent.appendChild(), a new element is added to the DOM.
 const parent = document.getElementById("parentDiv");
parent.appendChild(newDiv); // adds newDiv at the end of parentDiv
