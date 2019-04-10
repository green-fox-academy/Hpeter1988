'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

let s: number = 25

for (let i: number = 0; i < 600; i = i + s) {
    for (let j: number = 0; j < 400; j = j + s) {
        if(i % 2 !== j % 2){
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(i, j, s, s);

        };
    } ;

};