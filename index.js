const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const { resolve } = require('path');

const app = express();
const port = 3000;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
  }
};

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  await connectToDatabase();
});
