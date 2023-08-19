const multer = require('multer');
const path = require('path');

// Set up the storage engine for Multer
const storage = multer.diskStorage({
    destination: './uploads/horoscopeFiles/', // Define the destination folder for uploaded images
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage: storage });

module.exports=upload;