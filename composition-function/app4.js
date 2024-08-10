function printPascalTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let value = 1;
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += value + " ";
      value = (value * (i - j)) / (j + 1);
    }
    console.log(line.trim());
  }
}

printPascalTriangle(7);

/**
 * Returns the font style class based on the given type.
 *
 * @param {string} type - The type of font style (e.g. "heading", "subheading", etc.)
 * @return {string} The font style class (e.g. "font-bold text-2xl font-sans", etc.)
 */

function getFontStyleClass(type) {
  let fontFamily = {
    heading: "font-bold text-2xl font-sans",
    subheading: "font-semibold text-xl font-serif",
    body: "font-normal text-base font-sans",
    caption: "font-light text-sm font-mono",
    button: "font-medium text-lg font-sans",
    quote: "font-italic text-lg font-serif",
    default: "font-normal text-base font-sans",
  }[type];

  return fontFamily || fontFamily["default"];
}

const promise = new Promise((resolve) => {
  console.log("Inside promise");
  resolve("Hello");
});

promise.then((val) => {
  console.log(val);
  console.log("After promise");
});

// getFontStyleClass("");
