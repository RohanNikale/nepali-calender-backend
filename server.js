const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

// Connecting to the database
require('./Config/database');
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

