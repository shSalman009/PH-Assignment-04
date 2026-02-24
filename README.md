1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   these are DOM methods to access html element. getElementById returns a single unique element by Id, getElementsByClassName returns a collection of html elements by Class name, querySelector returns the first matching element using CSS selector and querySelectorAll returns a NodeList of html element using CSS selector.

2. How do you create and insert a new element into the DOM?
   We create a new element using document.createElement() and use appendChild() to insert a new element into the DOM.

3. What is Event Bubbling? And how does it work?
   Event Bubbling is when a event happen in an element then bubble up through its parent element.

4. What is Event Delegation in JavaScript? Why is it useful?
   Event Delegation is technique where we handle event on parent element instead of handling event on every child. it reduce multiple event listener and save memory and CPU.

5. What is the difference between preventDefault() and stopPropagation() methods?
   preventDefault() stop the default action of an event and stopPropagation() stop event bubbling to parent elements.
