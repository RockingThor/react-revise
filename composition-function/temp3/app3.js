class PriorityQueue {
  constructor(compare) {
    this.compare = (a, b) => compare(a, b) > 0;
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(element) {}

  moveUp;
}

function sort(items, newOrder) {
  for (let i = 0; i < newOrder.length; i++) {
    while (newOrder[i] !== i) {
      swap(items, i, newOrder[i]);
      swap(newOrder, i, newOrder[i]);
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function objectAssign(target, ...sources) {
  for (const source of sources) {
    Object.keys(source).forEach((key) => {
      target[key] = source[key];
    });
  }
  return target;
}

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(objectAssign(target, source));
