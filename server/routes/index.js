const express = require('express');
const router = express.Router();
const coverLetterRoutes = require('./api/coverLetter');

router.use('/cover-letter', coverLetterRoutes);

module.exports = router;
