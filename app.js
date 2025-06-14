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
app.use(cors({
  origin: 'http://localhost:5173', // Changed from 'https://localhost:5173'
  credentials: true
}));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const numerologyRoutes = require('./routes/numerology');
app.use('/api/numerology', numerologyRoutes);

const astrologyRoutes = require('./routes/astrology');
app.use('/api/astrology', astrologyRoutes);

const dashBoardRoutes = require('./routes/dashboard');
app.use('/api/users', dashBoardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));