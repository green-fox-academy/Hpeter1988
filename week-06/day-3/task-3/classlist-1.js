'use strict'
let allClasses = document.getElementsByTagName('p')
console.log(allClasses[0].className)
if(allClasses[3].className === 'dolphin'){
  allClasses[0].innerText = 'pear'
}
if(allClasses[0].className === 'apple'){
  allClasses[2].innerText = 'dog'
}
allClasses[0].setAttribute('class', 'red')

let balloon = document.getElementsByClassName('balloon')[0]
balloon.style.borderRadius = '0';