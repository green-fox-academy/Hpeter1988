// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict'

let numList: number[] = [1, 2, 3, 8, 5, 6]

numList.map(num => {
    if (num === 8) { let cont: number = numList.indexOf(num)
    numList[cont] = 4 }
})

console.log(numList[3])
export { }