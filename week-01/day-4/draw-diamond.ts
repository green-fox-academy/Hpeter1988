'strict'

let lineCount: number = 7;
let diamond: string;
let space: string = ' ';
let star: string = '*';



for (let i: number = 0; i < lineCount; i++) {
    diamond = '';
    for (let j: number = 1; j < lineCount - i; j++){
        diamond = diamond + space;
    }
    for(let k: number = 1; k <= 2 * i +1; k++){
        diamond = diamond + star
    };
    console.log(diamond)
}