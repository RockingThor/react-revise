function test1(obj) {
  obj.name = "Changed";
}

let myObj = {
  name: "Rohit",
};
test1(myObj);

// console.log(myObj);
// console.log(typeof myObj);

// function testObj(obj) {
//   if (Array.isArray(obj)) {
//     obj.map((item) => testObj(item));
//   } else if (obj !== null && typeof obj === "object") {
//     Object.keys(obj).map((key) => {
//       if (Array.isArray(obj[key])) {
//         testObj(obj[key]);
//       } else if (obj[key] === undefined) {
//         obj[key] = null;
//       } else if (typeof obj[key] === "object") {
//         testObj(obj[key]);
//       }
//     });
//   } else {
//     console.log("was here");
//     if (obj === undefined) obj = null;
//   }

//   return obj;
// }

// function undefinedToNull(obj) {
//   if (Array.isArray(obj)) {
//     return obj.map((item) => undefinedToNull(item));
//   } else if (obj !== null && typeof obj === "object") {
//     const result = {};
//     for (const key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         result[key] = obj[key] === undefined ? null : undefinedToNull(obj[key]);
//       }
//     }
//     return result;
//   }
//   return obj;
// }

// // Test cases
// console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }));
// // { a: null, b: 'BFE.dev' }

// console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
// // { a: ['BFE.dev', null, 'bigfrontend.dev'] }

// console.log(testObj({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));

/**
 * @param {any} arg
 * @returns {any}
 */
function undefinedToNull(arg) {
  // your code here
  for (let key in arg) {
    if (arg[key] === undefined) {
      arg[key] = null;
    }
    if (typeof arg[key] === "object") {
      undefinedToNull(arg[key]);
    }
  }
  return arg;
}

console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
