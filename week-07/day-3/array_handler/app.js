const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
app.use(express.json());

app.post("/", (req, res) => {
  let answer = {};
  if (req.body.what === "sum" && req.body.numbers) {
    answer = { result: arraySum(req.body.numbers) };
  } else if (req.body.what === "multiply" && req.body.numbers) {
    answer = { result: arrayMultiply(req.body.numbers) };
  } else if (req.body.what === "double" && req.body.numbers) {
    answer = { result: arrayDouble(req.body.numbers) };
  } else {
    answer = { error: "Please provide a number!" };
  }
  res.send(answer);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function arrayMultiply(arr) {
  let multi = 1;
  for (let i = 0; i < arr.length; i++) {
    multi = multi * arr[i];
  }
  return multi;
}

function arrayDouble(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 2 * arr[i];
  }
  return arr;
}
