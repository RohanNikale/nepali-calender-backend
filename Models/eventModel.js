const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    userid: {
        type: String,
        required:  [true, 'Please Provide valid token'],
   
    },
    userName: {
        type: String,
        required:  [true, 'Please update your name'],
    },
    title: {
        type: String,
        required: [true, 'Please enter a title'],
    },
    dateAndTime: {
        type: Date,
        required: [true, 'Please enter a date'],
    },
    eventRepeat: {
        type: Boolean,
        required: [true, 'Please select event repeat'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
    },
    toDoList: {
        type: Array
    },
    location: {
        type: String,
        required: [true, 'Please enter a location'],
    },
    remindBefore: {
        type: Number,
    },
},
    { timestamps: true }

);

module.exports = mongoose.model('EventInfo', eventSchema);
