// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict'

let inNum: number = 4

function factorio(sumNum: number): number {
    let cont: number = 1;
    for (let i: number = 1; i <= sumNum; i++) {
        cont = cont * i
    } return cont
}
console.log(factorio(inNum))
export { }