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

function testFunction() {
  let memo = {},
    count = 0;
  return function (...args) {
    const key = args.reduce((accum, curr) => accum + curr, "");
    memo[key] = count++;
    console.log(memo);
  };
}

const funToCall = testFunction();

let testObj = {
  1: 1,
  2: 2,
  3: 3,
};

// funToCall(1, 2, 0);
// funToCall(3, 4);

// console.log(Object.keys(testObj).fin);

// let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
// let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// async function testFun() {
//   let val1 = await promise1;
//   let val2 = await promise2;
//   console.log(val1 + val2);
// }

// testFun();

function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
  }
  return arr;
}

// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));

// I B C A L K A
// D R F C A E A
// G H O E L A D

//   (0, 0), (1, 1), (2, 2)
//     (1, 3), (0, 4)
//     (1, 5), (2, 6)
let message = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
];

function decode(message) {
  let row = message.length,
    col = message[0].length,
    i = 0,
    j = 0,
    ans = "",
    previ = -1,
    prevj = -1;
  while (i < row && j < col) {
    if (i !== row - 1 && j !== col - 1) {
      while (i < row && j < col) {
        if (previ === i && prevj === j) {
          i++, j++;
        } else {
          (previ = i), (prevj = j);
          ans += message[i++][j++];
        }
      }
      if (j !== col) {
        i--, j--;
      }
    } else {
      while (i > 0 && j < col - 1) {
        if (previ === i - 1 && prevj === j + 1) {
          i--, j++;
        } else {
          ans += message[--i][++j];
          (previ = i), (prevj = j);
        }
      }
    }
  }
  return ans;
}

// 1 9 17 11 5 5 13 21

console.log(decode(message));
