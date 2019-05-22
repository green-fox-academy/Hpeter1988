const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let answer = {};
  if(input){
  anwser.received = input*1;
  anwser.result = input*2;
  }
  else anwser.error = 'Please provide an input!'

  res.send(answer)
  
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});