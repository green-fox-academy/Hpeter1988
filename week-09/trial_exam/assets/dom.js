'use strict';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.toFill');
const success = document.querySelector('.message');

form.addEventListener('submit', event => {
  event.preventDefault();
  aliasingURL();
});

function aliasingURL() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/api/links');
  xhr.onload = data => {
    let message = document.querySelector('.message');
    let response = JSON.parse(data.target.response);
    
    if(data.target.status != 400) {
      message.innerHTML = `Your URL is aliased to ${response[0].alias} and your secret code is ${response[0].secretCode}.`;
      inputs.forEach(input => (input.value = ''));
    }else{
      message.setAttribute('style', `color:red`);
      message.innerHTML = JSON.parse(data.target.response);
    };
  };
  xhr.send(
    JSON.stringify({
      url: document.querySelector('input[name="url"]').value,
      alias: document.querySelector('input[name="alias"]').value
    })
  );
};