'use strict'

let button = document.querySelector('button')

function DisableNextButton() {
  button.disabled = 'true';
}



/*
//First Solution

button.addEventListener('click', () => {
console.log(+ new Date());
DisableNextButton()

});
 */
button.onclick = () => {
  console.log(+ new Date());
  DisableNextButton()
  
  };
