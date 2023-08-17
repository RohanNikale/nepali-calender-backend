const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: './Config/config.env' });

const bodyParser = require('body-parser');

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Route imports
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const suvaSaitsRoutes = require('./routes/suvaSaitsRoutes');
const adminEventRoutes = require('./routes/adminEventRoutes');

app.use('/auth', authRoutes);
app.use('/event', eventRoutes);
app.use('/suvasaits', suvaSaitsRoutes);
app.use('/admin/event', adminEventRoutes);

// Error Middleware

module.exports = app;
