'use strict'

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = listA;

console.log(listB);

if (listA.indexOf('Durian') === -1) {
    console.log("It's not here")
}
else console.log("It's in the list");

let index: number = listB.indexOf('Durian');
console.log(index);

listB.splice(3, 1);

console.log(listB);

listA.splice(4, 0, 'Kiwifruit');

console.log(listA);

if (listA.length > listB.length){

    console.log("listA is bigger")
};
if (listA.length < listB.length){

    console.log("listB is bigger")
};
if (listA.length = listB.length){

    console.log("equel")
};

console.log(listA.indexOf('Avocado'));

console.log(listB.indexOf('Durian'));

listB.push("Fruit", "Pummelo");

console.log(listB);

console.log(listA[2]);


export { }