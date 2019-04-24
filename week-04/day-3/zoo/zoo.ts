"use strict";

abstract class Animals {
  name: string = "";
  age: number = 0;
  haveFur: boolean = true;
  reproductionType: string = "";
  numberOfLegs: number = 0;

  getName() {
    return this.name;
  }
  breed() {
    return this.reproductionType;
  }
}

class Mammal extends Animals {
  constructor(pName: string) {
    super();
    this.name = pName;
    this.reproductionType = "pushing out a puppy";
  }
}
class Reptile extends Animals {
  constructor(pName: string) {
    super();
    this.name = pName;
    this.reproductionType = "Laying eggs";
  }
}
class Bird extends Animals {
  constructor(pName: string) {
    super();
    this.name = pName;
    this.reproductionType = "Laying eggs";
  }
}
let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());