Array.prototype.myMap = function (cb, thisArgs) {
  let result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    result[i] = cb.call(thisArgs, this[i], i, this);
  }
  return result;
};

let arr = [1, 2, 3, 4];

let arr1 = arr.myMap((item, i) => {
  return item * 2;
});

//The output will be [2,4,6,8]
console.log(arr1);

// let arr2 = arr.myMap((item, i) => {
//   arr.push(0);
//   return item * 2;
// });
// This will create an infinite loop because with every call we're increasing the length of the array.
// However, if we're running the program in V8, it will stop the execution once it detects the change in array length.
// The error will look like this:
// Uncaught RangeError: Invalid array length
//     at Array.push (<anonymous>)
//     at app1.js:12:7
//     at Array.myMap (app1.js:4:20)
//     at app1.js:11:16

// So, how do we fix this?

// Simple! Just store the length of the array in a variable and you're good to go.
Array.prototype.myMap = function (cb, thisArgs) {
  let len = this.length;
  let result = new Array(this.length);
  for (let i = 0; i < len; i++) {
    result[i] = cb.call(thisArgs, this[i], i, this);
  }
  return result;
};

console.log(
  arr1.myMap((item, i) => {
    arr1.push(0);
    return item * 2;
  })
);
//This time we'll get [4,8,12,16]

function myFun(a) {
  console.log(a);
}
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  const result = this();
};
