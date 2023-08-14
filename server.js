const app = require('./app')
require("dotenv").config();
require("./config/database");



// connecting to database


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
});

