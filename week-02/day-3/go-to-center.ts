'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function centerLine(x: number, y: number){
        ctx.strokeStyle = "black"    
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, 200);
        ctx.stroke();
};

for(let i: number = 0; i < 120; i = i+40){
    centerLine(i, i+100)
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.