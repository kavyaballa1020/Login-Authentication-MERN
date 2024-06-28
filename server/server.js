// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI; // Access MongoDB URI from environment variable

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define User Model
const User = require('./models/User');

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/welcome', require('./routes/welcome'));

// Start server with nodemon
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
