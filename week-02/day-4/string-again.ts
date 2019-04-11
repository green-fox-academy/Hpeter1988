function stringer(main: string,) :string{
    let x: string = "x";
    if (main.indexOf(x) === -1){
     return main;
    }else{
      let mainArr: string [] = main.split(x)
      
      return stringer(mainArr.join(''));
    }
}
    console.log(stringer("xyzxxxxxxxxxP"))