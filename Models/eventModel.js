const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    userName:{
        type:String
    },
    title: {
        type: String,
        // required: [true, 'Please enter a title'],
    },
    date: {
        type: Date,
        // required: [true, 'Please enter a date'],
    },
    eventRepeat: {
        type: Boolean,
        // required: [true, 'Please select event repeat'],
    },
    description: {
        type: String,
        // required: [true, 'Please enter a description'],
    },
    toDoList: {
        type:Array
    },
    location: {
        type: String,
        // required: [true, 'Please enter a location'],
    },
    remindBefore: {
        type: Number,
    },
    Time: {
        type: String,
        // required: [true, 'Please set the time'],
    }
});

module.exports = mongoose.model('EventInfo', eventSchema);
