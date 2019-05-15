"use strict";

const imgLink = document.querySelector("img");
console.log(imgLink.getAttribute("src"));
imgLink.setAttribute(
  "src",
  "https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2011/05/cartoon-baby-crows.png"
);

const link = document.querySelector("a");
link.setAttribute("href", "https://www.greenfoxacademy.com/");

let button = document.querySelector(".this-one");
button.disabled = true;

let lastButtonText = document.getElementsByClassName("this-one")[0];
lastButtonText.innerHTML = "Don't click me!";
