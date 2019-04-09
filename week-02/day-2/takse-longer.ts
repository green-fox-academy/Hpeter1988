'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let splitedQuote = quote.split('It')
splitedQuote.splice(1, 0, 'It always takes longer than')
let finalOut = splitedQuote.join('')
console.log(finalOut)
export { }
