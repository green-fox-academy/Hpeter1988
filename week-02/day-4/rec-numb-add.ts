'use strict';

function Adder(x: number) :number{
    
if (x <= 0){
return 0;
};
return x + Adder(x-1)
}

console.log(Adder(5))
