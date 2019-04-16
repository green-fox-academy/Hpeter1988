'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error
const fs = require('fs');

function countLines(path: string){
  try{

  let fileContent = fs.readFileSync(path, 'UTF-8');
  let fileContentArr = fileContent.split('\n')
  console.log(fileContentArr.length)
}catch(e){console.log(0)}
}

countLines('test2.txt')