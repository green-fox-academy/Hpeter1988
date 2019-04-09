'use strict'

//We are going to represent our expenses in a list containing integers.

//Create a list with the following items.
//500, 1000, 1250, 175, 800 and 120
//Create an application which solves the following problems.
//How much did we spend?
//Which was our greatest expense?
//Which was our cheapest spending?
//What was the average amount of our spendings?

let expens: number[] = [500, 1000, 1250, 175, 800, 120]

let sum: number = 0
for (let i: number = 0; i < expens.length; i++) { sum = sum + expens[i] }
console.log("We spent: " + sum)
console.log("Our average spending: " + sum / expens.length)

let great = Math.max.apply(null, expens);
console.log(great)

let cheap = Math.min.apply(null, expens);
console.log(cheap)

export { }