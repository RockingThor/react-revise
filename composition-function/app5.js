const myName = {
  firstName: "Rohit",
  lastName: "Nandi",
};

function printName(vill, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}, ${vill}, ${state}`
  );
}

// printName.call(myName, "wb");
// printName.apply(myName, ["wb"]);

Function.prototype.myBind = function (...args) {
  let functionToBeCalled = this;
  let params = args.slice(1);
  return function (...args2) {
    functionToBeCalled.apply(args[0], [...params, ...args2]);
  };
};

const newFun = printName.myBind(myName, "bmp");

// newFun("WB");

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

function curry(fn) {
  return (curriedFn = (...args) => {
    const filteredArgs = args.filter((item) => item !== curry.placeholder);
    if (filteredArgs.length >= fn.length) {
      return fn(...filteredArgs);
    } else {
      return (...args2) => {
        return curriedFn.apply(null, filteredArgs.concat(args2));
      };
    }
  });
}

const _ = curry.placeholder;
const curriedJoin = curry(join);

console.log(curriedJoin(_, _, 3, 4)(1, _)(2, 5));
