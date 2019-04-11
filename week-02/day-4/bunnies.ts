'use strict';

function earCursion(bunnies: number) :number{
    
if (bunnies <= 0)
return 0;

return 2 + earCursion(bunnies-1)
}

console.log(earCursion(5))