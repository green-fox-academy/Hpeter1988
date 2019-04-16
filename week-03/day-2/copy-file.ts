'use strict'

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

function copyCont(from: string, to: string) {
  try {
    let fileContent = fs.readFileSync(from, 'UTF-8');
    fs.writeFileSync(to, fileContent);
    console.log(true)
  }
  catch (e) { console.log(false) }
}

copyCont('cffrom.txt', 'cfto.txt')
