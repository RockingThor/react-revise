function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        console.log(arr);
      }
    }
  }
}

let arr = [-1, 2, 2, 4, 99, 99, 100, 10000];
// bubbleSort(arr);
// console.log(arr);

function partition(arr, low, high) {
  let pivot = low,
    i = low + 1,
    j = high;
  while (i <= j) {
    while (arr[i] <= arr[pivot] && i <= high) {
      i++;
    }
    while (arr[j] > arr[pivot]) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
  return j;
}

function quickSortHelper(low, high, arr) {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSortHelper(low, p - 1, arr);
    quickSortHelper(p + 1, high, arr);
  }
}

function quickSort(arr) {
  quickSortHelper(0, arr.length - 1, arr);
  return arr;
}

console.log(
  quickSort([
    51, 11, 34, 43, 31, 35, 46, 37, 73, 6, 65, 98, 85, 66, 72, 30, 7, 32, 89,
    75,
  ])
);
