const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies for POST requests
app.use(bodyParser.json());
app.use(cors());
// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '123456', 
    database: 'registration' 
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// API Endpoint for user registration
app.post('/register', (req, res) => {
    const { username, phoneNumber, email, password } = req.body;

    const sql = 'INSERT INTO daftar (username, phone_number, email, password) VALUES (?, ?, ?, ?)';
    const values = [username, phoneNumber, email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Failed to register user' });
        }

        console.log('User registered successfully');
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
