let starPlace: number = 1

function stringer(main: string,) :string{

    if (main.lastIndexOf('*') === main.length-2){
        return main;
    }
    else{
    let firstHalf: string = main.substring(0, starPlace);
    let secondHalf: string = main.substring(starPlace, main.length);
    main = firstHalf + '*' + secondHalf;
    starPlace =starPlace + 2;
     return stringer(main)
    }
}
console.log(stringer('abdefgh'))