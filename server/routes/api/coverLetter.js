const express = require('express');
const router = express.Router();
const { OpenAIApi } = require("openai");

module.exports = function(openai) {
    // POST route to generate a cover letter
    router.post('/generate-cover-letter', async (req, res) => {
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

    return router;
};
