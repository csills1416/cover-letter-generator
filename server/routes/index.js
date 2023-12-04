const express = require('express');
const router = express.Router();

// Require the coverLetter route
const coverLetterRoute = require('./api/coverLetter');

module.exports = function(openai) {
    // Use the coverLetter route and pass the openai instance
    router.use('/cover-letter', coverLetterRoute(openai));

    return router;
};
