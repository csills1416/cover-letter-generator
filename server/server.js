const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cover Letter Generator Backend is running');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
