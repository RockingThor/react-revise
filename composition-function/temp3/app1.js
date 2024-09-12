let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello from promise1");
  }, 2000);
});

function excecutePromiseStatus(prom, delay) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Promise timed out"));
    }, delay);

    prom
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

async function timeoutTest(prom, delay) {
  try {
    const output = await excecutePromiseStatus(prom, delay);
    console.log(output);
  } catch (error) {
    console.log(error);
  }
}

// timeoutTest(promise1, 1000);

let timeLimitCache = function () {
  this.mapp = new Map();
  this.mapp.set("a", "a");
};

timeLimitCache.prototype.set = function (key, value, duration) {
  console.log(this.mapp.get("a"));
};

// const cachedT = new timeLimitCache();

// cachedT.set("a", "a", 100);

let testObj = {
  a: {
    b: {
      c: 1,
    },
  },
  d: 2,
};

function update(data, command) {
  for (const [key, val] of Object.entries(command)) {
    switch (key) {
      case "$push": {
        return [...data, ...val];
      }
      case "$set": {
        return val;
      }
      case "$merge": {
        if (!(data instanceof Object)) {
          throw Error("Bad Merge");
        }
        return { ...data, ...val };
      }
      case "$apply": {
        return val(data);
      }
      default:
        if (data instanceof Array) {
          const result = [...data];
          result[key] = update(result[key], val);
          return result;
        } else {
          return {
            ...data,
            [key]: update(data[key], val),
          };
        }
    }
  }
}

class MyClass {
  constructor(data) {
    this.data = data;
    this.count = 0;
  }

  hello(val) {
    this.count += val;
    return this;
  }
}

const myInst = new MyClass(10);
let store = myInst.hello(1);
// console.log(store);
// console.log(store.hello);

function test1() {
  console.log("Hello");
}

function test2() {
  console.log("Hello");
}

console.log(test1 === test1);
