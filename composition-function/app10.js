function merge(left, right) {
  //   console.log(left, right);
  let arr = [];
  //   let leftIndex = 0,
  //     rightIndex = 0;
  //   while (leftIndex < left.length && rightIndex < right.length) {
  //     if (left[leftIndex] < right[rightIndex]) {
  //       arr.push(left[leftIndex++]);
  //     } else {
  //       arr.push(right[rightIndex++]);
  //     }
  //   }
  //   while (leftIndex < left.length) {
  //     arr.push(left[leftIndex++]);
  //   }
  //   while (rightIndex < right) {
  //     arr.push(right[rightIndex++]);
  //   }

  while (left.length && right.length) {
    if (right[0] > left[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

arr = ["a", "h", "l", "b", "z"];

console.log(mergeSort(arr));

// Bold tag strong tag
