const mongoose = require('mongoose');

const replaySchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    edited:Boolean
},{timestamps:true}
);

const replay = mongoose.model('replay', replaySchema);

module.exports = replay;
