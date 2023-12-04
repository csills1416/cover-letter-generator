const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config();

const app = express();
const port = 3000;

// OpenAI configuration
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cover Letter Generator Backend is running');
});

// POST route to generate a cover letter
app.post('/generate-cover-letter', async (req, res) => {
  const { name, jobTitle, companyName, additionalInfo } = req.body;

  try {
    // Use OpenAI API to generate the cover letter
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Or the latest available model
      prompt: `Write a professional cover letter for a person named ${name}, applying for the position of ${jobTitle} at ${companyName}. Additional information: ${additionalInfo}`,
      max_tokens: 500
    });

    const coverLetter = response.data.choices[0].text.trim();
    res.json({ coverLetter });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).send('Error generating cover letter');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
