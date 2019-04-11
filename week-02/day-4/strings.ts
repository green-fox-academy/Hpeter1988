'use strict';

//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' 
//chars have been changed to 'y' chars.


function stringer(main: string,) :string{
    let x: string = "x";
    if (main.indexOf(x) === -1){
     return main;
    }else{
      main = main.replace(x,"y" );
      return stringer(main);
    }
}
    console.log(stringer("xyz"))
    