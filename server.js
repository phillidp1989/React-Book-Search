const express = require('express');

const connectDB = require('./config/db');
const config = require('./config/config');

//To use .env file on localserver
require('dotenv').config();

// Initialize express into app variable
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to database
connectDB();

// Start the server
app.listen(config.express.port, () =>
  console.log(`App is running on port ${config.express.port}`)
);