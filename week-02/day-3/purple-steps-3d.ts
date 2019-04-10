'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let s: number = 10;

for (let i: number = 0; i < 5; i++) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(s, s, s, s);
        ctx.fillStyle = "purple";
        ctx.fillRect(s, s, s, s);
        s = s + s
}