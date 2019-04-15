'use strict';

//Create a list with the following items.
//Eggs, milk, fish, apples, bread and chicken
//Create an application which solves the following problems.
//Do we have milk on the list?
//Do we have bananas on the list?

let shoppingList: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];


function doWeHave(item:string, list: string[]):string{

 if( list.indexOf(item) != -1){
   return `We have ${item} in the list`
 }
 else return `We don't have ${item} in the list`
}

console.log(doWeHave('milk', shoppingList))
console.log(doWeHave('bannana', shoppingList))
