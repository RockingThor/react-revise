function createToastParent(position) {
  let element = document.createElement("div");
  element.classList.add("toast-container");
  element["toast-position"] = position;
  let container = document.querySelector(".container");
  container.appendChild(element);
  return element;
}
export class Toast {
  #toast;
  #parent;
  #time;
  constructor(props) {
    this.#toast = document.createElement("div");
    this.#toast.classList.add("toast");

    Object.entries(props).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  set content(value) {
    this.#toast.innerText = value;
  }
  set position(value) {
    let position = `.toast-container[toast-position="${value}"]`;
    let element = document.querySelector(position);
    if (element) {
      this.#parent = element;
    } else {
      this.#parent = createToastParent(value);
    }
  }
  set time(value) {
    this.#time = value;
  }
  show() {
    this.#parent.appendChild(this.#toast);
    setTimeout(() => {
      this.#parent.removeChild(this.#toast);
    }, this.#time);
  }
  get toastElement() {
    return this.#toast;
  }
}
