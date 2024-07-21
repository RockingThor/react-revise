const debouncedFunction = function (func, delay) {
  let timerID;
  let context = this;

  this.me = "Rohit";

  return function (...args) {
    clearTimeout(timerID);
    timerID = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
};

function test(a) {
  console.log(a);
  console.log(this.me);
}

const myFun = debouncedFunction(test, 1000);

myFun(9);
myFun(10);
myFun(11);
