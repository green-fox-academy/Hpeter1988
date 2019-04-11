'use strict'

function greatDiv(x: number, y:number): number{

if (y === 0){
return x}
else {return greatDiv(y, x % y)}
    }  

console.log(greatDiv(32, 6))