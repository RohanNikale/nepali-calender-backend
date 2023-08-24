const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    edited: Boolean
}
    , { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
