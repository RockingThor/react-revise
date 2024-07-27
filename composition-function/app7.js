const alphabets = {
  a: "a",
  b: "b",
};

function testApply(next, moreNExt) {
  console.log(`${this.a}, ${this.b},  ${next} and ${moreNExt}`);
}

// testApply.call(alphabets, "c");

// testApply.apply(alphabets, ["c"]);

function applyCurry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        curried(...args, ...args2);
      };
    }
  };
}

let curriedFn = applyCurry(testApply);

// curriedFn("a")("b");

function implementThrottle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

function myFun() {
  console.log("throtolled");
}

const throtolledFun = implementThrottle(myFun, 1000);

throtolledFun();

const element = document.getElementById("button");
element.addEventListener("click", () => {
  throtolledFun();
});

function implementThrottleBetterWay(callback, delay) {
  let timer;
  let lastCalled = 0;
  return function (...args) {
    let currentTime = Date.now();
    let timeRemained = currentTime - lastCalled;
    let differenceTime = timeRemained - delay;

    function invokeFn() {
      callback.call(this, ...args);
      lastCalled = Date.now();
    }

    if (differenceTime > 0) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(invokeFn, differenceTime);
    } else {
      invokeFn();
    }
  };
}

function myMap(cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
  return output;
}

Array.prototype.myMap = myMap;

const testArray = [1, 2, 3];

console.log(testArray.myMap((item) => item * 2));

function myFilter(cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }

  return output;
}

Array.prototype.myFilter = myFilter;

console.log(testArray.myFilter((item) => item > 1));

function myReduce(cb, start) {
  let accum = start;
  for (let i = 0; i < this.length; i++) {
    accum = accum ? cb(accum, this[i], i, this) : this[i];
  }
  return accum;
}

Array.prototype.myReduce = myReduce;

console.log(testArray.myReduce((accm, cur) => accm + cur));
