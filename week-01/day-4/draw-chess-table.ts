
'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lineCount: number = 8;


for (let i: number = 0; i < lineCount; i++) {
   let finalOut: string = '';
    for (let j: number = 0; j < lineCount; j++) {
        if ((i + j) % 2 == 0) {
            finalOut += '%';
        }
        else {
            finalOut += ' ';
        }
    }
    console.log(finalOut);
}
