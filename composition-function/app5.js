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

// const _ = curry.placeholder;
// const curriedJoin = curry(join);

// console.log(curriedJoin(_, _, 3, 4)(1, _)(2, 5));

function newCurry(fn) {
  return (curriedFn = (...args) => {
    if (checkIfOk(args, fn, newCurry.placeholder)) {
      return fn(...args);
    } else {
      return (...args2) => {
        let result = mergeArray(args, args2, newCurry.placeholder);
        return curriedFn.apply(null, result);
      };
    }
  });
}

function mergeArray(args1, args2, placeholder) {
  let index1 = 0,
    index2 = 0;
  let result = [];
  while (index1 < args1.length || index2 < args2.length) {
    if (index1 >= args1.length) {
      while (index2 < args2.length) result.push(args2[index2++]);
    }
    if (index2 >= args2.length) {
      while (index1 < args1.length) result.push(args1[index1++]);
    }
    if (args1[index1] === placeholder) {
      result.push(args2[index2]);
      index2++, index1++;
    } else {
      result.push(args1[index1++]);
    }
  }
  return result;
}

function checkIfOk(args, fn, placeholder) {
  if (args.length < fn.length) return false;
  for (let i = 0; i < args.length; i++) {
    if (i === fn.length - 1) return true;
    if (args[i] === placeholder) return false;
  }
  if (placeholderPresent) return false;
  return true;
}

const _ = newCurry.placeholder;

let curriedJoin = newCurry(join);

console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1));
