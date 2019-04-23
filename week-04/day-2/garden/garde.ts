"use strict";

import { Flower } from "./flower";
import { Tree } from "./tree";
import { Plant } from "./plant";

class Garden {
  gardenFlower: Flower[] = [];
  gardenTree: Tree[] = [];
  watering(waterWeHave) {
    for (let i: number = 0; i < this.gardenFlower.length; i++) {
      this.gardenFlower[i].waterAmaunt =
        this.gardenFlower[i].waterAmaunt +
        0.75 *
          (waterWeHave / (this.gardenFlower.length + this.gardenTree.length));
    }
    for (let i: number = 0; i < this.gardenTree.length; i++) {
      this.gardenTree[i].waterAmaunt =
        this.gardenTree[i].waterAmaunt +
        0.4 *
          (waterWeHave / (this.gardenFlower.length + this.gardenTree.length));
    }
    this.gardenFlower.forEach(x =>
      x.waterAmaunt < 5
        ? console.log(`The ${x.color} Flower needs water`)
        : console.log(`${x.color} Flower doesn't need water`)
    );
    this.gardenTree.forEach(x =>
      x.waterAmaunt < 10
        ? console.log(`The ${x.color} Tree needs water`)
        : console.log(`${x.color} Tree doesn't need water`)
    );
  }
}
let flower1 = new Flower("Yellow");
let flower2 = new Flower("Blue");
let tree1 = new Tree("Purple");
let tree2 = new Tree("Orange");

let myGarden = new Garden();
myGarden.gardenFlower.push(flower1, flower2);
myGarden.gardenTree.push(tree1, tree2);

myGarden.watering(40);
myGarden.watering(70);
