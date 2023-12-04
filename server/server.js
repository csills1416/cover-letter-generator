const express = require('express');
const { OpenAIApi } = require("openai");

require('dotenv').config();

const app = express();
const port = 3000;

// OpenAI configuration
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

// Import and use consolidated routes from the routes folder
const routes = require('./routes/index')(openai); // Adjust the path if necessary
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Cover Letter Generator Backend is running');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
