'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function draWSquare(x){
    ctx.beginPath();
ctx.strokeRect(600/2-x/2, 400/2-x/2 , x, x);
ctx.stroke();
};

for (let i: number = 0; i < 4; i++){
    draWSquare(10*i)
};