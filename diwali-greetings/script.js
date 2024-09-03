function debounce(func, delay) {
  let timerId;
  return function (...args) {
    console.log(timerId);
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

let btn = document.querySelector("button");
let debouncedClick = debounce(() => {
  console.log("Clicked");
}, 500);
btn.addEventListener("click", debouncedClick);
