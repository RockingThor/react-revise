const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");
const form = document.getElementById("form");
const button = document.getElementById("btn");

outerDiv.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  alert("Outer div clicked!", event.currentTarget.tagName);
});
innerDiv.addEventListener("click", (event) => {
  alert("Inner div clicked!", event.currentTarget.tagName);
});
form.addEventListener("click", (event) => {
  alert("Form clicked!", event.currentTarget.tagName);
});
button.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Button clicked!", event.currentTarget.tagName);
});

// If I click on the button the alert event will be popped up on Button, then in form, then in inner dive and after thet on outer div. The events will be triggered from bottom to up. This is caled event bubbling.

//There are some events which do'nt bubble. Events like Focus, blur etc.

//
