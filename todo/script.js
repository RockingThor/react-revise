let form = document.querySelector(".form");

let inputValues = ["", "", ""];
let selectValues = [false, false, false];

document.querySelector(".input1").addEventListener("input", (e) => {
  inputValues[0] = e.target.value;
});
document.querySelector(".input2").addEventListener("input", (e) => {
  inputValues[1] = e.target.value;
});
document.querySelector(".input3").addEventListener("input", (e) => {
  inputValues[2] = e.target.value;
});

document.querySelector(".select1").addEventListener("click", () => {
  selectValues[0] = !selectValues[0];
});
document.querySelector(".select2").addEventListener("click", () => {
  selectValues[1] = !selectValues[1];
});
document.querySelector(".select3").addEventListener("click", () => {
  selectValues[2] = !selectValues[2];
});

function ifWarningRequired() {
  let cond = false;
  selectValues.forEach((item) => {
    if (item) cond = true;
  });
  if (cond) {
    inputValues.forEach((item) => {
      console.log(item);
      if (!item) return true;
    });
  }
  return false;
}

form.addEventListener("input", (e) => {
  console.log("hello");
  if (ifWarningRequired()) {
    console.log(document.querySelector(".warning").class);
  }
});
