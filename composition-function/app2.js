//API => 5sec

async function myDelayFetch(cb, numRetry, delay) {
  if (numRetry === 0) return;
  try {
    const response = await cb();
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error, delay, numRetry);
    console.log("Retrying...");
    setTimeout(() => {
      myDelayFetch(cb, numRetry - 1, delay * 2);
    }, delay);
  }
}

function myPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Hello world");
    }, 1000);
  });
}

// myDelayFetch(myPromise, 5, 2000);

[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]];

function printPascal(row) {}

function excludeItems(items, excludes) {
  let filteredArr = items.filter((item) => {
    let cond = true;
    for (let i = 0; i < excludes.length; i++) {
      if (item[excludes[i].k] === excludes[i].v) {
        cond = false;
      }
    }
    if (cond) return item;
  });
  return filteredArr;
}

let items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];
// an exclude array made of key value pair
const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

console.log(excludeItems(items, excludes));

/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  // your code here
  if (data === null) {
    console.log("null");
    return "null";
  }
  if (data === undefined) {
    console.log("undefined");
    return "null";
  }
  if (typeof data === "function") {
    console.log("function");
    return "undefined";
  }
  if (typeof data === "symbol") {
    console.log("symbol");
    return "null";
  }
  if (data === Infinity || data === -Infinity) {
    console.log("Infinity");
    return "null";
  }
  if (typeof data === "number") {
    console.log("number");
    return `${data}`;
  }
  if (typeof data === "boolean") {
    console.log("boolean");
    return `${data}`;
  }
  if (typeof data === "boolean") {
    return `${data}`;
  }
  if (typeof data === "string") {
    return `"${data}"`;
  }
  if (typeof data !== data) {
    console.log("NaN");
    return "null";
  }
  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (Array.isArray(data)) {
    const arr = data.map((item) => stringify(item));
    const stringifiedArr = `[${arr.join(",")}]`;
    return stringifiedArr;
  }
  if (typeof data === "object") {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, []);
    return `{${arr.join(",")}}`;
  }
}

// console.log(stringify("12"));

const sym = Symbol("key");

console.log(typeof sym);
