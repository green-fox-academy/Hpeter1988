'use strict'

const fs = require('fs');

function write(fileContent:string){
  try{
fs.writeFileSync('myFile.txt', fileContent);
    }catch(e){}console.log('Unable to write file: my-file.txt')
}