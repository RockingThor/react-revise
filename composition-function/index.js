function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

function compositeOfTwo(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

const task = compositeOfTwo(add, square);

// console.log(task(2, 3));

const myfun = () => {
  console.log("hello");
};

// Closures
// let a = 10;
// function outer() {
//   const f = function inner() {
//     console.log(a);
//   };
//   return f;
// }

// a = 30;

// const fun = outer();

// fun();

// const timeout = setTimeout(() => {
//   console.log("From timeout");
// }, 3000);

// let a2 = 10;
// console.log(timeout);

// setTimeout(() => {
//   console.log(a2);
//   console.log(timeout);
// }, 4000);

// a2 = 11;

// function ex1() {
//   var var1 = 0;
//   setInterval(function () {
//     console.log(var1);
//     var1++;
//   }, 1000);
// }

// ex1();

// function outer() {
//   var a = 0;
//   return function () {
//     console.log(a);
//   };
// }

// outer()();

// function outer() {
//   var a = 0;

//   return {
//     getVal: function () {
//       console.log(a);
//     },
//     increment: function () {
//       a++;
//     },
//     decrement: function () {
//       a--;
//     },
//     setVal: function (val) {
//       a = val;
//     },
//   };
// }

// const instance = outer();

// instance.getVal();
// instance.increment();
// instance.getVal();
// instance.decrement();
// instance.getVal();
// instance.setVal(10);
// instance.getVal();

// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// counter1(); // 1
// counter1(); // 2
// counter2(); // 1
// counter2(); // 2

// let x = 10;
// function outer() {
//   x = 20;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }

// var innerFunc = outer();
// innerFunc(); // 20

// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = function () {
//     console.log(i);
//   };
// }

// funcs[0](); // 3
// funcs[1](); // 3
// funcs[2](); // 3

// function createFunctions() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function (num) {
//         return function () {
//           console.log(num);
//         };
//       })(i)
//     );
//   }
//   return arr;
// }

// var funcs = createFunctions();
// funcs[0](); // 0
// funcs[1](); // 1
// funcs[2](); // 2

// function outer() {
//   var a = 1;
//   function inner() {
//     a++;
//     console.log(a);
//   }
//   return inner;
// }

// var firstCall = outer();
// firstCall(); // 2
// firstCall(); // 3

// var secondCall = outer();
// secondCall(); // 2

// function createIncrementer(start) {
//   return function () {
//     start++;
//     console.log(start);
//   };
// }

// var increment = createIncrementer(5);
// increment(); // 6
// increment(); // 7
// increment(); // 8

// function outerFunc() {
//   var x = 0;
//   return {
//     increment: function () {
//       x++;
//       console.log(x);
//     },
//     decrement: function () {
//       x--;
//       console.log(x);
//     },
//   };
// }

// var counter = outerFunc();
// counter.increment(); // 1
// counter.decrement(); // 0
// counter.increment(); // 1

var a = 10;
function outer() {
  var a = 20;
  return function inner() {
    var a = 30;
    console.log(a);
  };
}

var func = outer();
func(); // 30
