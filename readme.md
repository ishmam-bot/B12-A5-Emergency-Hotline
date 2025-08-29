 Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


Ans to the Q/no -1 

The getElementById, getElementsByClassName, and querySelector / querySelectorAll are all DOM methods in Javascript programming.
getElementById() selects only a single element which is an Id attribute like <div id="main" class="box"></div>
On the other hand  getElementsByClassName() uses class's, thus it can select multiple  elements with the same class

like 
div class="box">tackklle
div class="box">Boien

The querySelector() selects the first element that matches a CSS selector like a class name, but uses ".box", and on the other hand querySelectorAll() selects all the elements with the   same class in the same way


Ans to the Q/no-2


It is created by using a document.createElement(tagName) to make a new element for example

const newDiv = document.createElement("div"); // creates <div></div>

newDiv.className = "my-class";               // adds a class
newDiv.id = "myId";                          // adds an id

 now by using the parent.appendChild(), a new element is added to the DOM.
 const parent = document.getElementById("parentDiv");
parent.appendChild(newDiv); // adds newDiv at the end of parentDiv


Ans to the Q/no-3


Event Bubbling is like traveling through the Javacript to access a specific element.
If we click on an element or event, the event first occurs on the most specific element,
and then bubbles up to its parent elements, all the way to the <html> element or document, for example 

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
}); 
When printing 
The event first gets the child’s listener - "Child clicked"

Then it gets up to the parent - "Parent clicked"



Ans to the Q/no-4



Event Delegation is a way in Javascript where it can get a single event listener to a parent element 
instead of multiple listeners to each child element. Then using the event object to determine which child element that gets the event.

<div id="button-container">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

const container = document.getElementById("button-container");

container.addEventListener("click", function(event) {
  if(event.target.tagName === "BUTTON") {
    alert(event.target.textContent + " clicked!");
  }
});

Thus here clicking any button can get the parent’s listener.
event.target can tell us exactly which button was clicked. 
Instead of using dozens or hundreds of listeners, only attaching one listener to the parent.
Makes it easy to code and good for performance.



Ans to the Q/no-5


preventDefault() stops the default browser behavior that can happen with clicking an event
like the browser’s default action for an event or preventing a form from submitting or a link from navigating.

Example : document.querySelector("a").addEventListener("click", e => e.preventDefault());

On the other hand stopPropagation() stops the event from bubbling up to parent elements, but doesn’t stop the default behavior:

Example :  document.getElementById("child").addEventListener("click", e => e.stopPropagation

the stopPropagation() can not do the same thing but it can stop event bubbling, the preventDefault() cannot do that.
Thats why they are sometimes combined which can stop both problems.

child.addEventListener("click", (e) => {
  e.preventDefault();    // prevents navigating to the link
  e.stopPropagation();   // stops the click from reaching the parent
  console.log("Child clicked");
});
