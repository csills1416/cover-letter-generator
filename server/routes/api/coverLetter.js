const express = require('express');
const router = express.Router();
const { generateCoverLetter } = require('../../controllers/coverLetterController');

module.exports = function(openai) {
    router.post('/generate', async (req, res) => {
        const { name, jobTitle, companyName, additionalInfo } = req.body;

        try {
            const coverLetter = await generateCoverLetter(openai, name, jobTitle, companyName, additionalInfo);
            res.json({ coverLetter });
        } catch (error) {
            res.status(500).send('Error generating cover letter');
        }
    });

    return router;
};
