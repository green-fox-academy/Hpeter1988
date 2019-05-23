const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const table = 'bookinfo';
const PORT = 3000;
const path = require("path");
const book_mast = 'book_mast'
const book_name = 'book_name'
app.use(express.json());
app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// write it in mySql ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/showtitles', (req, res) => {
  conn.query(`SELECT ${book_name} FROM ${book_mast};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.send(result);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
 });
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});
