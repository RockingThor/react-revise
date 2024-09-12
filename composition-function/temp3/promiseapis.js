/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    }
    let result = new Array(promises.length).fill(null);
    let count = 0;
    promises.forEach((prom, i) => {
      if (prom instanceof Promise) {
        prom
          .then((res) => {
            result[i] = { status: "fulfilled", value: res };
            count++;
            if (count === promises.length) {
              resolve(result);
            }
          })
          .catch((err) => {
            result[i] = { status: "rejected", reason: err };
            count++;
            if (count === promises.length) {
              resolve(result);
            }
          });
      } else {
        if (prom instanceof Function) {
          result[i] = { status: "fulfilled", value: prom() };
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        } else {
          result[i] = { status: "fulfilled", value: prom };
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        }
      }
    });
  });
}

const p1 = new Promise((resolve, reject) => reject("Hello"));
const p2 = new Promise((resolve, reject) => reject("Hi"));
const p3 = new Promise((resolve, reject) => reject("There"));
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("From settimeout");
  }, 2000);
});

allSettled([p1, p2, p3]).then((result) => console.log(result));

Promise.allSettled([p1, p2, p3]).then((result) => console.log(result));

Promise.race([p1, p2, p3, p4]).then((result) => console.log(result));

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((prom, i) => {
      prom
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let errorStrore = new Array(promises.length).fill(null);
    promises.forEach((prom, i) => {
      prom
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errorStrore[i] = err;
          count++;
          if (count === promises.length) {
            resolve(
              new AggregateError(
                "No Promise in Promise.any was resolved",
                errorStrore
              )
            );
          }
        });
    });
  });
}

any([p1, p2, p3]).then((result) => console.log(result));

Promise.any([p1, p2, p3]).then((result) => console.log(result));
