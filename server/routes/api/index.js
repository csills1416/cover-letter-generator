const router = require('express').Router();
const coverLetterRoute = require('./api/coverLetter');

router.use('/cover-letter', coverLetterRoute(openai));

module.exports = router;