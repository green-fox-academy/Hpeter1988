'use strict';

function Adder(x: number): number {

    if (x === 2) {
        return 1;
    }
    else if (x <= 1) {
        return 0;
    }
    return Adder(x - 1) + Adder(x - 2);
}

console.log(Adder(8));