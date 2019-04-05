'use strict';
let myNumber: number = 10;
let PrevSumNumber: number = 0;
for (let i: number = 1; i <= myNumber; i++) {
    (PrevSumNumber = i + PrevSumNumber);
};
console.log("Sum: " + PrevSumNumber)
console.log("average: " + (PrevSumNumber / myNumber))
