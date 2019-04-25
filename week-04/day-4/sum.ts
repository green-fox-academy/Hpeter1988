"use strict";

export class Sum {
listOfNumbers: number[]= []

constructor(pListOfNumbers: number[] = []){
this.listOfNumbers = pListOfNumbers
}

sum(): number {
  let sumOfNumbers: number = 0;
  for (let i: number = 0; i < this.listOfNumbers.length; i++) {
    sumOfNumbers += this.listOfNumbers[i];
  }
  
  return sumOfNumbers;
}
}
