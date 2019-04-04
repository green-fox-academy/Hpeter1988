'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let aSide: number = 4.2;
let bSide: number = 8.2;
let cSide: number = 16.2;
console.log('Surface Area:'+ 2 * (aSide*bSide+aSide*cSide+cSide*bSide) );
console.log( 'Volume:' + aSide*bSide*cSide);
