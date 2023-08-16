const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Connection successful');
    })
    .catch((e) => {
        console.log('Something went wrong with MongoDB connection:', e);
    });
