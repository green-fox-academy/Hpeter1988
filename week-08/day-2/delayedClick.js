'use strict'

let button = document.querySelector('button')

button.onclick = () => {
  setTimeout(() => { document.querySelector('p').innerText = '2 seconds ellapsed'; }, 2000);
}