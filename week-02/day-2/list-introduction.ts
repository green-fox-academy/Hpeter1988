'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "yo

let names: string[] = []

console.log(names.length);

names.unshift('Williams');

let empty: boolean = names.length > 0;

if (empty === true){ console.log('it s not empty')};

names.push('John', "Amanda");

console.log(names.length);

console.log(names[2]);

for (let i: number = 0; i < names.length; i++){
    console.log(names[i])
}

for (let i: number = 0; i < names.length; i++){
    console.log(i + 1 +'.' + names[i])
}
names.splice(0,1)
console.log(names)

for (let i: number = names.length; i >= 0; i--){
    console.log( names[i])
}
names.splice(0)
console.log(names)
export { }
