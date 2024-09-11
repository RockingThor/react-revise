console.log("Hello, World!");

//Write a function that uses `.map()` to double the values of an array and the spread operator to merge it with another array.

let arr1 = [1, 2, 3];

arr2 = arr1.map((item, i) => {
  return item * 2;
});

console.log(arr2);

arr3 = [...arr1, ...arr2];

console.log(arr3);

console.log([] + []);
console.log(0.1 + 0.2 === 0.3);
