"use strict";

//animal class
//Create a Farm class
//it has list of Animals
//it has slots which defines the number of free places for animals
//breed() -> creates a new animal if there's place for it
//slaughter() -> removes the least hungry animal

import { Animals } from "./animals";

class Farm {
  myFarm: Animals[] = []
  placeForAnimals: number = 6

  

  constructor(myFarm: Animals[]) {
    this.myFarm = myFarm;
    
  }
  breed(animalName: string) {
    if (this.myFarm.length < this.placeForAnimals) {
      this.myFarm.push(new Animals(animalName));
    } else console.log("No place for new animal");
  }

  slaughter(){
    let hungerValue: number[] =[] 
    for (let i: number = 1; i <= this.myFarm.length-1; i++) {
      hungerValue.push(this.myFarm[i].hunger)
    }
     let leastHungry = Math.max(...hungerValue)
     for (let i: number = 1; i <= this.myFarm.length-1; i++) {
      if(this.myFarm[i].hunger === leastHungry) {this.myFarm.splice(i, 1)}
    }
}
}

let myFirstFarm: Farm = new Farm ([])
myFirstFarm.breed('Cow')
myFirstFarm.breed('Pig')
myFirstFarm.breed('Horse')
myFirstFarm.breed('Goose')
myFirstFarm.breed('Chicken')
myFirstFarm.breed('Sheep')
myFirstFarm.myFarm[1].eat()
console.log(myFirstFarm.myFarm[1])
myFirstFarm.slaughter()
console.log(myFirstFarm)
myFirstFarm.breed('Sheep2')
myFirstFarm.breed('Sheep3')
myFirstFarm.breed('Sheep4')
console.log(myFirstFarm)