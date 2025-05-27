// backend/db.js
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Astro@131313',
  database: 'astro'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;