'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function trinagle(x,y,side) {

    if(side < 4){
    return
    }   
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + side, y);
    ctx.lineTo(x+side/2,y + (0.5*Math.pow(3, 0.5)*side));
    ctx.lineTo(x,y);
    ctx.stroke();
    trinagle(x, y , side/2);
    trinagle(x + side/2, y , side/2);
    trinagle(x + side/4, y + (0.5*Math.pow(3, 0.5)*side)/2, side/2);


}
trinagle(10,10,580);