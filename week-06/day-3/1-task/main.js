'use strict'
let myParagraphs = document.getElementsByTagName('p')
let lastLine = document.getElementsByClassName('animals')[0].innerHTML
console.log(lastLine)
for (let i = 0; i < myParagraphs.length; i++){
myParagraphs[i].innerHTML = lastLine
}