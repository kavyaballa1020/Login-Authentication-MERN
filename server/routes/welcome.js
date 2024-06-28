// server/routes/welcome.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Welcome
router.get('/', auth, (req, res) => {
  try {
    res.json('Welcome to the protected route!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
