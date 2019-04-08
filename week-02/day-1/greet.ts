'use strict'
    
// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

let nameToGreat: string = "GreenFox"

function greet(greets: string):string{
   if( nameToGreat.length > 0) {return greets = "Greetings, dear " + greets}
   else return "Name needed"
}

console.log(greet(nameToGreat))
export {};