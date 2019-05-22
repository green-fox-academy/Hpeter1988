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
  answer.received = input*1;
  answer.result = input*2;
  }
  else answer.error = 'Please provide an input!'

  res.send(answer)
});

app.get('/greeter', (req, res) => {
  let inputName = req.query.name;
  let inputTitle = req.query.title;
  let answer = {}
  if(inputName && inputTitle){
  answer.welcome_message = `Oh, hi there ${inputName}, my dear ${inputTitle}!`}
  else if (inputName && !inputTitle){
    answer.error = "Please provide a title!"
  }
  else if (!inputName && inputTitle){
    answer.error = "Please provide a name!"
  }
  else if (!inputName && !inputTitle) {
    answer.error = 'Please provide a name and title'}
  res.send(answer)
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});