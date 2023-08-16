const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Connection successful'))
    .catch(error => console.error('MongoDB connection error:', error));
