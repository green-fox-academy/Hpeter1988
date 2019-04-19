"use strict";

class Station {
  gasAmaunt: number;

  constructor() {
    this.gasAmaunt = 500;
  }
  refill(car: Car) {
    this.gasAmaunt = this.gasAmaunt - car.gasCapacity;
    car.gasAmaunt += car.gasCapacity;
  }
}
class Car {
  gasAmaunt: number;
  gasCapacity: number;

  constructor() {
    this.gasAmaunt = 0;
    this.gasCapacity = 100;
  }
}

let mol: Station = new Station
let myOldSuzuki: Car = new Car
console.log(mol)
console.log(myOldSuzuki)
mol.refill(myOldSuzuki)
console.log(mol)
console.log(myOldSuzuki)