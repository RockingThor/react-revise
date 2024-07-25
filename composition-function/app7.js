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
