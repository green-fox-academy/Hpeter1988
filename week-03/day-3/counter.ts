'use strict'

//Create a Counter class
//which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value


class Counter {

  intiger: number;
  
  constructor(intiger: number = 0){

    this.intiger = intiger

  }
number(numberToAdd: number){this.intiger = numberToAdd + this.intiger}
add(){this.intiger ++}
get(){console.log(this.intiger.toString(10))}
reset(){this.intiger = 0}
}

let myNumber: Counter = new Counter()
myNumber.number(4)
console.log(myNumber)
myNumber.get()
myNumber.add()
console.log(myNumber)