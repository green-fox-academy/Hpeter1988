'ise strict'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let inNum: number = 4

function sum(sumNum: number): number {
    let cont: number = 0;
    for (let i: number = 1; i < sumNum; i++) {
        cont = cont + i
    } return cont
}
console.log(sum(inNum))
export { }