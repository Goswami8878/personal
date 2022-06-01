const express = require('express');

const router = express.Router();

router.get('/test-me4', function (req, res) {
    res.send('My last ever api!')
});

module.exports = router;
// adding this comment for no reason