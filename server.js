const app = require('./app')

require("dotenv").config();

// connecting to database

require("./config/database");

const server = app.listen(process.env.PORT, () => {

    console.log(`Server is running at http://localhost:${process.env.PORT}`)

});

