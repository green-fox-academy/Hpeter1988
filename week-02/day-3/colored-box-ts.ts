'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(300, 10);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(590, 200);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(590, 200);
ctx.lineTo(590, 10);
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(590, 10);
ctx.lineTo(300, 10);
ctx.stroke();
