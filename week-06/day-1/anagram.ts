"use strict";

export function anagramComp(wordOne: string, wordTwo: string): boolean {
let wordOneOrdered:string = wordOne.split('').sort().join()
let wordTwoOrdered:string = wordTwo.split('').sort().join()
 return wordOneOrdered === wordTwoOrdered
}

