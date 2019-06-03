    
'use strict';

const URL = 'http://api.icndb.com/jokes/random';


let jokes = document.querySelector('.jokes')


fetch(URL)
  .then(response => response.json())
  .then(myJson => {
        jokeDiv.innerHTML = myJson.value.joke
 })
 