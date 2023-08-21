const mongoose = require('mongoose');

const SuvaSaitsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        // required: [true, 'Please enter a title'],
    },
    userName: {
        type: String
    },
    pageTitleInNepali: {
        type: String,
        // required: [true, 'Please enter a title in Nepali '],
    },
    pageTitleInEnglish: {
        type: String,
        // required: [true, 'Please enter a title in English'],
    },
    saitListings: {
        type: Array
    },
    yearlySuvaSaits: {
        type: Array
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('SuvaSaitsInfo', SuvaSaitsSchema);