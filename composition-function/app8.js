function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data); //success
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (err) {
    console.log(err);
    return "Error caught";
  })
  .then(function (res) {
    console.log(res);
  });

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

// loadJson("someUrl").catch((err) => console.log(err));

async function LoadJson(url) {
  try {
    const res = await fetch(url);
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(err);
  }
}

// console.log(LoadJson("someurl"));

function promise1() {
  return new Promise((res, rej) => {
    res("Promise1");
  });
}
function promise2() {
  return new Promise((res, rej) => {
    res("Promise2");
  });
}
function promise3() {
  return new Promise((res, rej) => {
    res("Promise3");
  });
}

function excecutePromiseRecursively(promises) {
  if (promises.length === 0) return;
  const curPromise = promises.shift();

  curPromise
    .then((res) => {
      console.log(res);
      return excecutePromiseRecursively(promises);
    })
    .catch((err) => console.log(err));
}

excecutePromiseRecursively([promise1(), promise2(), promise3()]);

function sum(num) {
  let res = 0;
  if (res) {
    res = num;
    return res;
  } else {
    res += num;
    return res;
  }
}

console.log(sum(1));
console.log(sum(1));

function testFun(a, b, c) {
  console.log(`${a}_${b}_${c}`);
}

function implementCurry(cb) {
  return function curried(...args) {
    if (args.length >= cb.length) {
      return cb(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

const curriedFn = implementCurry(testFun);
console.log(curriedFn(1)(2)(3));

function sumFn(num) {
  const fn = function (num2) {
    return num2;
  };
  fn.valueOf = () => num;
  return fn;
}

const getFun = sumFn(2);
console.log(getFun == 2);
