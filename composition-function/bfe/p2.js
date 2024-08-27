class Node {
  value;
  right;
  left;
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function helper(node, arr) {
  if (!node) {
    arr.push(null);
    return;
  }
  arr.push(node.value);
  helper(node.left, arr);
  helper(node.right, arr);
}
function serialize(root) {
  let arr = [];
  helper(root, arr);
  return JSON.stringify(arr);
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserializeHelper(arr) {
  if (arr.length === 0) return null;
  let value = arr.shift();
  if (value === null) return null;
  let root = new Node(value);
  root.left = deserializeHelper(arr);
  root.right = deserializeHelper(arr);
  return root;
}
function deserialize(str) {
  let arr = JSON.parse(str);
  return deserializeHelper(arr);
}

let root = deserialize("[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]");

function traversalHelper(node, arr, level, depth) {
  if (!node) return;

  arr.push({ value: node.value, level: level, depth: depth });
  traversalHelper(node.left, arr, level - 1, depth + 1);
  traversalHelper(node.right, arr, level + 1, depth + 1);
}
function traverse(root) {
  let arr = [];
  traversalHelper(root, arr, 0, 0);
  arr.sort((a, b) => a.level - b.level);
  let result = [];
  let curLevel;
  console.log(arr[0].level);
  for (let i = 0; i < arr.length; i++) {
    if (!curLevel) curLevel = arr[i].level;
    let level = [];
    while (arr[i]?.level === curLevel) {
      level.push(arr[i++]);
    }
    level.sort((a, b) => a.depth - b.depth);
    level.map((item) => result.push(item.value));
    curLevel++;
    i--;
  }
  return result;
}

let result = traverse(root);
console.log(result);
