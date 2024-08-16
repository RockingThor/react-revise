/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let result = new Array(promises.length).fill(null);
    if (promises.length === 0) {
      resolve([]);
    }
    promises.forEach((fn, i) => {
      if (fn instanceof Promise) {
        fn.then((res) => {
          result[i] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        }).catch((err) => {
          reject(err);
        });
      } else {
        result[i] = fn();
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      }
    });
  });
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 2000);
});

// let then = Date.now();
// all([p1, p2, Promise.reject("error")])
//   .then((val) => {
//     console.log(val);
//     console.log(Date.now() - then);
//   })
//   .catch((err) => console.log(err));

const arr = [1, 2, 3, 4];

Object.defineProperty(arr, "0", {
  get() {
    console.log(`Index 0 was accessed`);
    return 1;
  },
  set(v) {
    console.log(`Index 0 was set`);
  },
});
Object.defineProperty(arr, "1", {
  get() {
    console.log(`Index 1 was accessed`);
    return 2;
  },
  set(v) {
    console.log(`Index 1 was set`);
  },
});
// for (let i = 0; i < arr.length; i++) {
//   console.log(`from loop. ${arr[i]}`);
// }

// arr[0] = 8;

// console.log(arr[0]);

/**
 * Recursively replaces all undefined values in an object with null.
 *
 * @param {any} arg - The object to replace undefined values in.
 * @return {any} The object with all undefined values replaced with null.
 */
function undefinedToNull(arg) {
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

JSON.stringify({ a: null }); // '{"a":null}'
JSON.stringify({ a: undefined }); // '{}'
JSON.stringify([null]); // '[null]'
JSON.stringify([undefined]); // '[null]'
