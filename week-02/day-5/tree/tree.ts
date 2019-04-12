'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function tree(x, y, line, angle) {
  ctx.beginPath();
  ctx.save();
  
  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -line);
  ctx.stroke();
    if(line < 5) {
      ctx.restore();
      return;
  }
    else
    tree(0,-line, line * 0.66, - 20 )
    tree(0,-line, line * 0.66, + 20 )
    tree(0,-line, line * 0.66, + 0 )
    ctx.restore();

}
tree(canvas.width/2, canvas.height, 150, 0)



