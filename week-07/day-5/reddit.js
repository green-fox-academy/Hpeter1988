const express = require('express');
const app = express();
const table = 'posts';
const PORT = 3000;
app.use(express.json());
const mysql = require('mysql');
require('dotenv').config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});


app.get('/hello', (req, res) => {
  res.status(200).send("WHAT'S UP MATE?");
 });

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});
