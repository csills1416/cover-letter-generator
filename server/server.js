const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cover Letter Generator Backend is running');
});

// POST route to generate a cover letter
app.post('/generate-cover-letter', (req, res) => {
    // Extracting data from the request body
    const { name, jobTitle, companyName, additionalInfo } = req.body;
});  

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
