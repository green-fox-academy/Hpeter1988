'use strict'

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
const fs = require('fs');

function uniqIP(file: string){
let fileContent = fs.readFileSync(file, 'UTF-8');
let fileContentArr = fileContent.split('   ')
let uniq:string[]= []
for(let i:number = 1; i <= fileContentArr.length-1; i += 2){
(uniq.push(fileContentArr[i]))}
//Post counter
let fileContentArr2 = fileContent.split(' ')
let postcount: number = 0
let getcount: number = 0
for(let j:number = 0; j <= fileContentArr2.length-1; j++){
if(fileContentArr2[j].indexOf('POST') != -1){
postcount++}
}
for(let k:number = 0; k <= fileContentArr2.length-1; k++){
  if(fileContentArr2[k].indexOf('GET') != -1){
  getcount++}
  }
console.log(`Number of GETs ${getcount}`)
console.log(`Number of POSTs ${postcount}`)
}

uniqIP('log.txt')