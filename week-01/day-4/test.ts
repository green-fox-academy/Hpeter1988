'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
for(let i: number = 1; i <= lineCount; i++){
    let doboz: string = ''
    for(let j: number = 1; j<= lineCount; j++){
        if(i === 1 || i === lineCount){
        doboz = doboz + '%'}
        else{
            if(j === 1 || j === lineCount){doboz = doboz + '%' }
            else{doboz = doboz + '-'}
        }
    }

console.log(doboz)
}