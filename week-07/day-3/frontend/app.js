const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
app.use(express.json());
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/doubling", (req, res) => {
  let input = req.query.input;
  let answer = {};
  if (input) {
    answer.received = input * 1;
    answer.result = input * 2;
  } else answer.error = "Please provide an input!";

  res.send(answer);
});

app.get("/greeter", (req, res) => {
  let inputName = req.query.name;
  let inputTitle = req.query.title;
  let answer = {};
  if (inputName && inputTitle) {
    answer.welcome_message = `Oh, hi there ${inputName}, my dear ${inputTitle}!`;
  } else if (inputName && !inputTitle) {
    answer.error = "Please provide a title!";
  } else if (!inputName && inputTitle) {
    answer.error = "Please provide a name!";
  } else if (!inputName && !inputTitle) {
    answer.error = "Please provide a name and title";
  }
  res.send(answer);
});

app.get("/appenda/:word", (req, res) => {
  let input = app.param.word;
  let answer = {};
  if (input) {
    answer.appended = input + "a";
    res.send(answer);
  } else {
    res.status(404);
  }
});

app.post("/dountil/:action", (req, res) => {
  var answer = {};
  if (req.params.action === "sum" && req.body.until) {
    answer = { result: sumTo(req.body.until) };
  } else if (req.params.action === "factor" && req.body.until) {
    answer = { result: factorTo(req.body.until) };
  } else {
    answer = { error: "Please provide a number!" };
  }
  res.send(answer);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function factorTo(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}
