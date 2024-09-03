export default function debouncedFunction(delay, cb) {
  let timerId;
  return function (...args) {
    console.log(timerId);
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
