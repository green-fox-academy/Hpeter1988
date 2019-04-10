'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i: number = 0; i < 4; i++){
  let colors: string []=['red', 'green', 'black', 'yellow'] 
  ctx.beginPath();
ctx.fillStyle = colors[i];
ctx.fillRect(50 * (i + 1), 50 * (i + 1), 10 * (i + 1), 10 * (i + 1));
};
