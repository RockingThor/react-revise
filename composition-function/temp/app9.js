function myIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: nextIndex, done: true };
    },
  };
  return rangeIterator;
}

const iter = myIterator(0, 10, 1);

let result = iter.next();

while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

function* myGenerator() {
  console.log("Start running");
  yield "First yield encountered and paused";
  console.log("After 1st yield");
  yield "2nd yield encountered";
  return "stopped";
}

let logger = myGenerator();

console.log(logger.next());
console.log(logger.next());
console.log(logger.next());

// Start running
// app9.js:39 {value: 'First yield encountered and paused', done: false}
// app9.js:32 After 1st yield
// app9.js:40 {value: '2nd yield encountered', done: false}
// app9.js:41 {value: 'stopped', done: true}

for (let item of myGenerator()) {
  console.log(item);
}

// Start running
// app9.js:50 First yield encountered and paused
// app9.js:32 After 1st yield
// app9.js:50 2nd yield encountered

// Generators functions give us iterators

function* infinityAndBeyond() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

function* take(n, iterable) {
  for (let item of iterable) {
    if (n <= 0) return;
    n--;
    yield item;
  }
}

let takeArray = [...take(10, infinityAndBeyond())];
console.log(takeArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function* listener() {
  console.log("...Getting values");
  while (true) {
    let msg = yield;
    console.log("message: ", msg);
  }
}

let myListen = listener();

myListen.next("Hello brother");
myListen.next("I'm looking for a switch");
myListen.next("Can you please refer me");
myListen.next("to your company?");

// ...Getting values
// app9.js:82 message:  I'm looking for a switch
// app9.js:82 message:  Can you please refer me
// app9.js:82 message:  to your company?

let players = {};
let queue = [];
function send(name, msg) {
  console.log(msg);
  queue.push([name, msg]);
}

function run() {
  while (queue.length) {
    let [name, msg] = queue.shift();
    players[name].next(msg);
  }
}

function* ping() {
  let n;
  while (true) {
    n = yield;
    console.log("ping", n);
    send("pong", ++n);
  }
}

function* pong() {
  let n;
  while (true) {
    n = yield;
    console.log("pong", ++n);
    send("ping", ++n);
  }
}

players.ping = ping();
send("ping", "Get ready...");
players.pong = pong();
send("pong", "Get ready...");
send("ping", 0);
// run();
