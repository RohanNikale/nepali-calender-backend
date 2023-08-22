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
    pageTitle:{
        nepali: {type:String},
        english: {type:String}
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