'use strict';

let a: number = 24;

if (a % 2 === 0) {
    console.log(a + 1);
}
// if a is even increment out by one


let b: number = 22;
let out2: string = '';

if (b > 10 && b < 20){
    console.log (out2 = "Sweet!")
}
else if (b < 10){
    console.log (out2 = "Less!") 
}
else if (b > 20){
    console.log(out2 = "More!")
}
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

let c: number = 123;
let credits: number = 61;
let isBonus: boolean = true ;

if (credits >= 50 && !isBonus){
    console.log(c - 2)
}
else if (credits< 50 && !isBonus){
    console.log(c - 1)
}
else if (isBonus){
    console.log(c)
}

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same


let d: number =  9;
let time: number = 311;
let out3: string = '';

if (d % 4 === 0 && time <= 200){
    console.log(out3 = "check"); 
}
else if ( time > 200 ){
    console.log(out3 = "Time out");
}
else if( d % 4 >=0 || time <= 200 ){
    console.log(out3 = "Run Forset Run!")
}
// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
export {};
