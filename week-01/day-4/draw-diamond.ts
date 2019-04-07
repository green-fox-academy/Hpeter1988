let lineCount: number = 7;
let finalOut: string;
let space: string = '-';
let star: string = '*';

for (let i: number = 0; i < lineCount/2; i++) {
  finalOut = '';
  for (let j: number = 1; j+i < lineCount/2; j++){
      finalOut = finalOut + space;
  }
  for(let k: number = 1; k <= 2 * i +1; k++){
      finalOut = finalOut + star;
  }
  
  
 console.log(finalOut);}

for (let i: number = 1; i < lineCount/2; i++) {
    finalOut = '';
    for (let j: number = lineCount/2-i; j < lineCount/2; j++){
        finalOut = finalOut + space;
    }
    for(let k: number = 0; k < lineCount-i*2; k++){
        finalOut = finalOut + star;
    }

    
  console.log(finalOut);}
// Bevérzett az agyam, de elkészült :D