let el = document.querySelector(".el");

// console.log(element);

/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
  let props = {};
  for (let attr of element.attributes) {
    let propName = attr.name === "class" ? "className" : attr.name;
    props[propName] = attr.value;
  }
  let children = [];
  for (let child of element.childNodes) {
    if (child.nodeType === 3) {
      children.push(child.textContent);
    } else {
      children.push(virtualize(child));
    }
  }
  if (children.length === 1 && element.childNodes[0].nodeType === 3) {
    children = children[0];
  }
  props[children] = children;
  return {
    type: element.tagName.toLowerCase(),
    props,
  };
}

/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
  if (typeof obj === "string") {
    return document.createTextNode(obj);
  }
  const {
    type,
    props: { children, ...atr },
  } = obj;
  const element = document.createElement(type);
  for (let [attr, value] of Object.entries(atr)) {
    element[attr] = value;
  }

  let childrenArr = Array.isArray(children) ? children : [children];

  for (let child of childrenArr) {
    element.append(render(child));
  }

  return element;
}

console.log(virtualize(el));

let ans = {
  type: "div",
  props: {
    children: [
      {
        type: "h1",
        props: {
          children: " this is ",
        },
      },
      {
        type: "p",
        props: {
          className: "paragraph",
          children: [
            " a ",
            {
              type: "button",
              props: {
                children: " button ",
              },
            },
            " from",
            {
              type: "a",
              props: {
                href: "https://bfe.dev",
                children: [
                  {
                    type: "b",
                    props: {
                      children: "BFE",
                    },
                  },
                  ".dev",
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
