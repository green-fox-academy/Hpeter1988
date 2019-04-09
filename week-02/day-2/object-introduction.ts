'use strict'

let firstObj: any = {};
console.log(Object.keys(firstObj).length === 0 ? 'empty' : 'not empty');

firstObj[97] = 'a';
firstObj[98] = 'b';
firstObj[99] = 'c';
firstObj[65] = 'A';
firstObj[66] = 'B';
firstObj[67] = 'C';

console.log(Object.keys(firstObj))

console.log(Object.values(firstObj));

firstObj[68] = 'D';

console.log(Object.keys(firstObj).length)

delete firstObj[97];

console.log(Object.hasOwnProperty('100'))

firstObj = {}

export { }