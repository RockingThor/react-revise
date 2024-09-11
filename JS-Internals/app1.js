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
function groupBy(items, callback) {
  console.log(callback);
  console.log(callback(items[0]));
}

// groupBy([{ item: 1 }], ({ item }) => item);

// let map = new Map();
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// map.set("d", 4);

// map.forEach((key, value) => console.log(value));

function deepClone(data) {
  if (data === null || typeof data !== "object") {
    return data;
  }
  let result = Array.isArray(data) ? [] : {};

  Object.keys(data).map((key) => {
    result[key] = deepClone(data[key]);
  });

  return result;
}

let myObj = {
  a: 1,
  b: {
    c: {
      d: 1,
    },
    e: 1,
  },
};

console.log(deepClone(myObj));
