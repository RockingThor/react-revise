function delayPromise(time, cb) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(() => console.log("Enter a valid number"));
    }
    setTimeout(() => {
      resolve(cb());
    }, time);
  });
}

delayPromise(2000, () => {
  return "hello";
})
  .then((output) => console.log(output))
  .catch((err) => console.log(err));

setTimeout(() => {
  console.log("Hello from setTimeOut");
}, 2000);
