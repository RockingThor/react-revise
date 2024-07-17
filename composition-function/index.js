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
let a = 10;
function outer() {
  const f = function inner() {
    console.log(a);
  };
  return f;
}

a = 30;

const fun = outer();

// fun();
