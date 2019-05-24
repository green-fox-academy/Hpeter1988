const express = require('express');
const app = express();
const table = 'posts';
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send("WHAT'S UP MATE?");
 });

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});
