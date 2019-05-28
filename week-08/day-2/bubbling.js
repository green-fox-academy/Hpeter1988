let x = 0;
let y = 0;
let zoom = 200;

let ParentOfButtons = document.querySelector("nav");
let inspector = document.querySelector(".img-inspector");
console.log(inspector);

const navigation = event => {
  let direction = event.target.dataset.direction;
  if (direction === "out") {
    zoom -= 20;
    inspector.style["background-size"] = `${zoom}%`;
  }
  else if (direction === "in") {
    zoom += 20;
    inspector.style["background-size"] = `${zoom}%`;
  }
  else if (direction === "left") {
    x -= 10;
    inspector.style["background-position-x"] = `${x}px`;
  }
  else if (direction === "right") {
    zoom += 10;
    inspector.style["background-position-x"] = `${zoom}px`;
  }
  else if (direction === "up") {
    y -= 10;
    inspector.style["background-position-y"] = `${zoom}%`;
  }
  else if (direction === "down") {
    zoom += 10;
    inspector.style["background-position-y"] = `${zoom}%`;
  }
};

ParentOfButtons.addEventListener("click", navigation);
