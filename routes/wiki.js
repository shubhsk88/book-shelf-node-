const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('Wiki Homepage');
});

router.get('/about', function (req, res) {
  res.send('About the wikipedia');
});

module.exports = router;
