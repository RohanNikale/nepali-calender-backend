const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

// Connecting to the database
require('./config/database');

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});