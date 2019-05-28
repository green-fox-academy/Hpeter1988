'use strict'

let button = document.querySelector('button')

button.addEventListener('click', () => {
  let result = document.querySelector('.result')
  let listOfCountableElements = document.querySelectorAll('li');
  let numberOfListElements = 0;
  for(let i = 0; i < listOfCountableElements.length; i++ ){
    numberOfListElements++
  }
  result.innerText = numberOfListElements
});