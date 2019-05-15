"use strict";

const planetData = [
  {
    category: "inhabited",
    content: "Foxes",
    asteroid: true
  },
  {
    category: "inhabited",
    content: "Whales and Rabbits",
    asteroid: true
  },
  {
    category: "uninhabited",
    content: "Baobabs and Roses",
    asteroid: true
  },
  {
    category: "inhabited",
    content: "Giant monsters",
    asteroid: false
  },
  {
    category: "inhabited",
    content: "Sheep",
    asteroid: true
  }
];

let list = document.querySelector(".asteroids");
let kingRemoved = document.querySelector("li");
list.removeChild(kingRemoved);

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    let element = document.createElement("li");
    element.innerText = planetData[i].content;
    element.setAttribute("class", planetData[i].category);
    list.appendChild(element);
  }
}