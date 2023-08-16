const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,    
        },
        title:{
            type: String,
            required: [true, 'Please Enter title']
        },
        date:{
            type:Date,
            required: [true, 'Please Enter Date']
        },
        eventRepeat:{
            type:Boolean,
            required: [true, 'Please select event Repeat']
        },
        description:{
            type:String,
            required: [true, 'Please Enter Description']
        },
        toDoList:{
            type:Array
        },
        location:{
            type:String,
            required: [true, 'Please Enter location']
        },
        remindBefore:{
            type:Number
        },
        Time:{
            type:String,
            required: [true, 'Please set the time']
        }

        
    }
);



module.exports = mongoose.model('EventInfo', eventSchema);
