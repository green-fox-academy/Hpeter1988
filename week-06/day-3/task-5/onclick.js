"use strict";

const button = document.querySelector("button");
console.log(button);
button.onclick = () => {
  let pageContent = document.querySelector("body");
  if (
    pageContent.getAttribute("class") === "" ||
    pageContent.getAttribute("class") === null
  ) {
    pageContent.setAttribute("class", "party");
  } else {
    pageContent.removeAttribute("class");
  }
};
