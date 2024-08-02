Array.prototype.myMap = function (cb) {
  let arrayPassed = this;
  let output = [];
  for (let i = 0; i < arrayPassed.length; i++) {
    output.push(cb(arrayPassed[i], i, arrayPassed));
  }
  return output;
};

const arr = [1, 2, 3];

const newArr = arr.myMap((item) => {
  console.log(item);
});
console.log(newArr);
console.log(arr);

Function.prototype.myBind = function (...args1) {
  let functionReference = this;
  return function (...args2) {
    let arg = args1.slice(1);
    functionReference.apply(args1[0], [...arg, ...args2]);
  };
};

let myObj = {
  name: "Rohit",
};

function testFunction(lastName) {
  console.log(`${this.name} ${lastName}`);
}

let bindedFun = testFunction.myBind(myObj, "N");
bindedFun("Nandi");

// let modArray = arr.map((item, i, arr) => (arr[i] = item * 2));

// console.log(modArray);

// function add(a, b) {
//   console.log(a + b);
// }

// let bindFun = add.bind(this, 2);

// bindFun(3);

const arra = [1, [2], [3, [4]]];

function flattenArray(obj, depth) {
  console.log(flatArray(obj, [], depth));
}

function flatArray(obj, res, depth) {
  if (depth == 0) return obj;

  for (let i = 0; i < obj.length; i++) {
    if (typeof obj[i] === "object") {
      for (let j = 0; j < obj[i].length; j++) {
        res.push(obj[i][j]);
      }
    } else {
      res.push(obj[i]);
    }
  }

  flatArray(res, [], depth - 1);
  return res;
}

// flattenArray(arra, 1);

// function testRef(arr) {
//   arr = [1, 2];
// }

// let tArr = [1, 2, 3];
// testRef(tArr);

// console.log(tArr);

let arrTemp = [1, 2, [3, [4]]];
let outTemp = [];

// for (let i = 0; i < arrTemp.length; i++) {
//   if (Array.isArray(arrTemp[i])) {
//     outTemp.push(...arrTemp[i]);
//   } else {
//     outTemp.push(arrTemp[i]);
//   }
// }

// console.log(outTemp);

function iterative(arr, depth) {
  let cond = true;
  while (depth > 0 && cond) {
    let count = 0;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count++;
        output.push(...arr[i]);
      } else {
        output.push(arr[i]);
      }
    }
    depth = depth - 1;
    if (count === 0) cond = false;
    arr = output;
  }
  return arr;
}

// console.log(iterative([1, 2, 3, [4, 5, [6, 7]]], Infinity));
