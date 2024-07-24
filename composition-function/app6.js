Array.prototype.myMap = function (...args) {
  let arrayPassed = this;
  console.log(arrayPassed);
  return function (...args2) {
    console.log(arrayPassed);
  };
};

const arr = [1, 2, 3];

arr.myMap();
