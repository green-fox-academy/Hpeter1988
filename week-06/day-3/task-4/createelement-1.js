'use strict'

const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid1 = document.createElement('li');
newAsteroid1.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid1);
const newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

const header = document.querySelector('.container')
const newHeader = document.createElement('header')
newHeader.textContent ='I can add elements to the DOM!'
header.appendChild(newHeader)
let img =document.createElement('img')
img.setAttribute('src', 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/60364163_2126519640780615_8092113161877979136_n.jpg?_nc_cat=100&_nc_ht=scontent-vie1-1.xx&oh=ecb1c790d1a40d0fa2aca739812601c0&oe=5D9E9EB3')
header.appendChild(img)