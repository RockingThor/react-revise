function implementThrottle(cb, delay) {
  let waiting = false,
    prevArguments = null;
  return function throttled() {
    if (!waiting) {
      waiting = true;
      cb.apply(this, arguments);
      setTimeout(() => {
        waiting = false;
        if (prevArguments) cb.apply(this, prevArguments);
      }, delay);
    } else {
      prevArguments = [...arguments];
    }
  };
}

let count = 0;
function printCount(count) {
  console.log(count);
}
const throtolledFun = implementThrottle(printCount, 1000);

const btn = document.getElementById("button");
btn.addEventListener("click", () => {
  count++;
  throtolledFun(count);
});

let emptyObj = {};
console.log(emptyObj === emptyObj);
