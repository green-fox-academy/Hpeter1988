'use strict';

let arr: number[] = [1, 4, 5, 88, 1, 5, 9, 1, 7,]


function maximum(n: number[]): number {
    if (n.length === 1) {
        return n[0]
    }
    else {
        if (n[0] < n[1]) {
            n.splice(0, 1)
        }
        else {
            n.splice(1, 1)
        }
    } return (maximum(n))
}

console.log(maximum(arr))