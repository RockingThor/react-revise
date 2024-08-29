class LinkedList {
  value;
  left;
  right;
  constructor(value, left = undefined, right = undefined) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BrowserHistory {
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  head;
  constructor(url) {
    if (url) {
      this.head = new LinkedList(url);
    }
  }
  /**
   * @param { string } url
   */
  visit(url) {
    if (this.head) {
      let newNode = new LinkedList(url);
      newNode.left = this.head;
      this.head.right = newNode;
      this.head = this.head.right;
    } else {
      this.head = new LinkedList(url);
    }
  }

  /**
   * @return {string} current url
   */
  get current() {
    return this.head.value;
  }

  // go to previous entry
  goBack() {
    this.head = this.head.left;
  }

  // go to next visited url
  forward() {
    this.head = this.head.right;
  }
}

const bh = new BrowserHistory();
bh.visit("A");
console.log(bh.current);
bh.visit("B");
console.log(bh.current);
bh.goBack();

console.log(bh.current);

class MyURLSearchParams {
  /**
   * @params {string} init
   */
  map;
  urlParam;
  index;
  constructor(init) {
    this.map = new Map();
    this.index = 0;
    this.urlParam = init;
    let arr = init.slice(1).split("&");
    this.index++;
    arr.map((item) => {
      let [key, value] = item.split("=");
      let start = index;
      this.index = this.index + key.length + 1 + value.length;
      let end = index;
      if (this.map.has(key)) {
        this.map.set(key, [...this.map.get(key), { value, start, end }]);
      } else {
        this.map.set(key, { value, start, end });
      }
    });
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    let start = ++this.index;
    this.index = this.index + name.length + 1 + value.length;
    let end = this.index;
    if (this.map.has(name)) {
      this.map.set(name, [...this.map.get(name), { value, start, end }]);
    }
    this.urlParam = `${this.urlParam}&${name}=${value}`;
  }

  /**
   * @params {string} name
   */
  delete(name) {
    let params = this.map.get(name);
    let newUrl = "";
    for (let i = 0; i < params.length; i++) {}
  }

  /**
   * @returns {Iterator}
   */
  entries() {}

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {}

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {}

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {}

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {}

  /**
   * @return {Iterator}
   */
  keys() {}

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {}

  // sor all key/value pairs based on the keys
  sort() {}

  /**
   * @return {string}
   */
  toString() {}

  /**
   * @return {Iterator} values
   */
  values() {}
}
