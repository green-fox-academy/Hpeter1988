
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
let lineCount: number = 8
for (let k: number = 0; k < lineCount; k++){
    if(k % 2 === 0){
        console.log(" % % % %")};

    if(k % 2 > 0){
        console.log("% % % %")
    }
};
