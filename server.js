const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Add these lines BEFORE defining any routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Welcome to the Ideas API!');
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter); 

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
