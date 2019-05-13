'use strict';

export function getIndex(list:number[], num:number):number{
  
  if(list.indexOf(num) != -1){
     return list.indexOf(num);
  } else return -1;

};

console.log(getIndex([5,12,67,3,9], 67));
