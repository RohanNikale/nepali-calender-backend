const express = require('express');
const dotenv = require('dotenv')

const app = express();
const bodyParser = require('body-parser');
dotenv.config({path:'./Config/config.env'})

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.send('hello world')
})
// Route imports
// const user = require('./routes/userRoutes');

const authRoutes = require('./routes/authRoutes')
const Event = require('./routes/eventRoutes')

// app.use('/api/v1',user);
app.use('/auth', authRoutes);
app.use('/event', Event);


// Error Middleware

module.exports = app;