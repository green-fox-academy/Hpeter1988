'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******'
'use strict';

let lineCount: number = 4;
let finalOut: string;
let space: string = ' ';
let star: string = '*';



for (let i: number = 0; i < lineCount; i++) {
    finalOut = '';
    for (let j: number = 1; j < lineCount - i; j++){
        finalOut = finalOut + space;
    }
    for(let k: number = 1; k <= 2 * i +1; k++){
        finalOut = finalOut + star;
    }
    
    
   console.log(finalOut);}