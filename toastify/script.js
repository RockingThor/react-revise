import { Toast } from "./Toast.js";
let duration = 3000;
let content;
let btn_top_left = document.querySelector("#btn-top-left");
let btn_top_right = document.querySelector("#btn-top-right");
let btn_bottom_left = document.querySelector("#btn-bottom-left");
let btn_bottom_right = document.querySelector("#btn-bottom-right");

let select = document.querySelector("#duration-select");
select.addEventListener("change", (e) => {
  duration = Number(e.target.value) * 1000;
});

let content_input = document.querySelector("#text-content");

content_input.addEventListener("input", (e) => {
  content = e.target.value;
});

btn_top_left.addEventListener("click", () => {
  let toast = new Toast({
    content: content || "This is a toast appearing in top left",
    position: "top-left",
    time: duration,
  });
  console.log(toast);
  toast.show();
});
btn_top_right.addEventListener("click", () => {
  let toast = new Toast({
    content: content || "This is a toast appearing in top right",
    position: "top-right",
    time: duration,
  });
  toast.show();
});
btn_bottom_left.addEventListener("click", () => {
  let toast = new Toast({
    content: content || "This is a toast appearing in bottom left",
    position: "bottom-left",
    time: duration,
  });
  toast.show();
});
btn_bottom_right.addEventListener("click", () => {
  let toast = new Toast({
    content: content || "This is a toast appearing in bottom right",
    position: "bottom-right",
    time: duration,
  });
  toast.show();
});
