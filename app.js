// backend/app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Update the origin to match your frontend's actual URL:
app.use(cors({
  origin: 'http://localhost:5173', // Changed from 'https://localhost:5173'
  credentials: true
}));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));