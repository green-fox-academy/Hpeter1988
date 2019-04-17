'use strict'

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
const fs = require('fs');

const decoding: string = 'UTF-8'

function uniqIP(file: string) {
  let fileContent = fs.readFileSync(file, decoding);
  let splitedContentArr = fileContent.split('   ')
  let allIPs: string[] = [];
  for (let i: number = 1; i <= splitedContentArr.length - 1; i += 2) {
    (allIPs.push(splitedContentArr[i]))
  }
  let uniqueIPs = Array.from(new Set(allIPs))
  console.log(uniqueIPs)
}

function postGetCounter(file: string) {
  let fileContent = fs.readFileSync(file, decoding);
  let splitedContentArr = fileContent.split('\n');
  let getcount: number = 0;
  for (let i: number = 0; i <= splitedContentArr.length - 1; i++) {
    if (splitedContentArr[i].indexOf('GET') > -1) {
      getcount++;
    }
  }
  let postcount: number = splitedContentArr.length - getcount;
  console.log(`Get: ${getcount}`);
  console.log(`Post: ${postcount}`);
}
uniqIP('log.txt');
postGetCounter('log.txt');
