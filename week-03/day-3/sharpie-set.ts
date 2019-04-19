"use strict";

import { Sharpie } from "./sharpie";

class SharpieSet {
  sharpieSet: Sharpie[];

  constructor(sharpieSet: Sharpie[]) {
    this.sharpieSet = sharpieSet;
  }
  countUsable() {
    let countUsable: number = 0;
    for (let i: number = 0; i <= this.sharpieSet.length-1; i++) {
      if (this.sharpieSet[i].inkAmount > 0) {
        countUsable++;}
        console.log(countUsable)
      
    }
  }
  removeTrash(){
    for (let i: number = 0; i <= this.sharpieSet.length-1; i++) {
      if (this.sharpieSet[i].inkAmount <= 0){
        this.sharpieSet.splice(i, 1)
      }
  }
}
}
let myFilc1: Sharpie = new Sharpie ('red',0.5 );
let myFilc2: Sharpie = new Sharpie ('black', 0.7);

for (let i: number = 0; i < 100;i++ ){
  myFilc2.use()
}
let myFirstSharpieSet: SharpieSet = new SharpieSet ([myFilc1, myFilc2])
console.log(myFirstSharpieSet)

myFirstSharpieSet.countUsable()
myFirstSharpieSet.removeTrash()
console.log(myFirstSharpieSet)
