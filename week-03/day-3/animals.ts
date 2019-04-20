'use strict'

//Create an Animal class
//Every animal has a hunger value, which is a whole number
//Every animal has a thirst value, which is a whole number
//when creating a new animal object these values are created with the default 50 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one

export class Animals {
  animalName: string;
  hunger: number;
  thirst: number;


  constructor(animalName: string, ) {

    this.animalName = animalName;
    this.hunger = 50;
    this.thirst = 50;
  }
  drink() { this.thirst++ }

  eat() { this.hunger++ }

  play() {
  this.hunger--;
    this.thirst--
  }

}

const animal = new Animals('Crow')
console.log(animal);
animal.play();
console.log(animal);
animal.eat();
console.log(animal);