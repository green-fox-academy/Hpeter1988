"use strict";

let candies = 1001;
let lollypops = '';
let speed = 0;

const createCandies = (event) => {
  candies++;
  document.querySelector('.candies').innerText = `${candies}`;
};

const buyLollypops = (event) => {
 if (candies >= 100){
   candies -= 100;
   lollypops += '🍭';
   document.querySelector('.lollypops').innerText = lollypops;
    if(lollypops.length % 20 === 0){
      speed ++
    }
 }
};

const makeCandyRain = (event) => {
  speed = speed * 10
 };

 const logData = ()=> {document.querySelector('.candies').innerText = candies;
 document.querySelector('.speed').innerText = speed;}

 const autoCandyCreation = (event) => {
  candies = candies + speed
  if(candies === 1000){
    clearInterval
  }
 };

document.querySelector(".create-candies").addEventListener("click", createCandies);
document.querySelector(".buy-lollypops").addEventListener("click", buyLollypops);
document.querySelector(".candy-machine").addEventListener("click", makeCandyRain);

setInterval(logData, 1);

setInterval(autoCandyCreation, 1000);


