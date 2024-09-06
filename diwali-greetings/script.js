function debounce(func, delay) {
  let timerId;
  return function (...args) {
    console.log(timerId);
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

Array.prototype.myMap = function (func, args) {
  let arrayPassed = this;
  if (arrayPassed == null) {
    throw new TypeError("Method is called for null or undefined");
  }
  if (typeof func !== "function") {
    throw new TypeError("Invalid callback passed");
  }

  let result = new Array(arrayPassed.length);
  for (let i = 0; i < arrayPassed.length; i++) {
    result[i] = func.call(args, arrayPassed[i], i, Object(this));
  }
  return result;
};

Array.prototype.myFilter = function (func, args) {
  let arrayPassed = this;

  let result = [];
  for (let i = 0; i < arrayPassed.length; i++) {
    if (func.call(args, arrayPassed[i], i, Object(this))) {
      result.push(arrayPassed[i]);
    }
  }

  return result;
};

Array.prototype.myReduce = function (func) {};

let arr = [1, 2, 3];
let newArr = arr.myFilter((item, i) => {
  return item >= 2;
});

console.log(newArr);
