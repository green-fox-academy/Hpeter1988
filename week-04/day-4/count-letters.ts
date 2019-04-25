'use strict'
/* 
Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
Create a test for that. */

export function countLetters(input: string): void{

let dictionary: any = {}
let letterCounter: number = 0;
for(let i: number = 0; i < input.length; i++){
  if (dictionary[input[i]]){
    dictionary[input[i]] += 1;
} else {
    dictionary[input[i]] = 1;
}
}
return dictionary
}

countLetters('fofofofewrer')
