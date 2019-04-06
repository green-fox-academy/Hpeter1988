
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
let finalOut: string = ''


for (let i: number = 0; i < lineCount; i++) {
    finalOut;
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
