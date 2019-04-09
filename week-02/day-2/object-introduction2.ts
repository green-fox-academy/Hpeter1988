'use strict'

let secondObj: any = {};

secondObj["978-1-60309-452-8"] = "A Letter to Jo"
secondObj["978-1-60309-459-7"] = "Lupus"
secondObj["978-1-60309-444-3"] = "Red Panda and Moon Bear"
secondObj["978-1-60309-461-0"] = "The Lab"

console.log(Object.keys(secondObj))

for(let i: number = 0; i < Object.keys(secondObj).length; i++){

console.log(`${[Object.keys(secondObj)[i]]} (ISBN: ${Object.keys(secondObj)[i]})`);

};

delete secondObj["978-1-60309-444-3"]

console.log(secondObj)

delete secondObj["978-1-60309-461-0"]

console.log(secondObj)

secondObj ["978-1-60309-450-4"]	= "They Called Us Enemy";
secondObj ["978-1-60309-453-5"]	= "Why Did We Trust Him?";
 
console.log(secondObj.hasOwnProperty("478-0-61159-424-8"));
console.log(secondObj["978-1-60309-453-5"]);

export { }

//978-1-60309-452-8	A Letter to Jo
//978-1-60309-459-7	Lupus
//978-1-60309-444-3	Red Panda and Moon Bear 
//978-1-60309-461-0	The Lab