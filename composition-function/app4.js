// function delayPromise(time, cb) {
//   return new Promise((resolve, reject) => {
//     if (isNaN(time)) {
//       reject(() => console.log("Enter a valid number"));
//     }
//     setTimeout(() => {
//       resolve(cb());
//     }, time);
//   });
// }

// delayPromise(2000, () => {
//   return "hello";
// })
//   .then((output) => console.log(output))
//   .catch((err) => console.log(err));

// setTimeout(() => {
//   console.log("Hello from setTimeOut");
// }, 2000);

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[2]);

let myName = {
  firstName: "Rohit",
  lastName: "Nandi",
};

function printName(...args) {
  console.log(this.firstName + " " + this.lastName);
  console.log(args);
}

printName.call(myName);

printName.apply(myName, ["Hello"]);

let newFun = printName.bind(myName, "Hello");
newFun();

//Create my own myBind Method

Function.prototype.myBind = function () {
  let context = this;

  return function () {
    console.log(context);
  };
};

function test() {
  console.log("Test");
}

test.myBind(myName);
