'use strict';

let a: number = 3;
// make it bigger by 10

console.log(a + 10);

let b: number = 100;
// make it smaller by 7

console.log(b-7);

let c: number = 44 * 2;
// double c's value

console.log(c);

let d: number = 125 / 5;
// divide d's value by 5

console.log(d);

let e: number = 8;
// what's the cube of e's value?

console.log(e * e * e);

let f1: number = 123;
let f2: number = 345;

console.log(f1>f2);

// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;

console.log(g1<g2 * g2);

// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;

console.log(h % 11 === 0);

// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;

console.log(i1 > i2 && i1 < i2 * i2 * i2 );

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;

console.log(j % 3 === 0 || j % 5 === 0);
// tell if j is divisible by 3 or 5 (as a boolean)
export {};
