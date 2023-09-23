const Comment = require('../Models/commentModel');

// Reusable function to modify a comment
const modifyComment = async (req, res, action) => {
    try {
        const commentId = req.params.commentid;
        const findComment = await Comment.findById(commentId);

        if (!findComment) {
            return res.status(404).json({ status: false, message: 'Comment not found' });
        }

        if (!(req.user.id === findComment.userId)) {
            return res.status(403).json({ status: false, message: 'Access denied.' });
        }

        const result = await action(commentId, req.body);

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Create Comment
exports.createComment = async (req, res) => {
    try {
        const productid = req.body.productId;
        if (!productid) {
            return res.status(400).json({ status: false, message: 'Please provide productid in the request body' });
        }

        const newComment = new Comment({
            productId: productid,
            userId: req.user.id,
            ...req.body
        });

        await newComment.save();

        res.status(201).json({
            message: 'Successfully created Comment',
            status: true,
            comment: newComment
        });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Get All Comments for a Product
exports.getAllComments = async (req, res) => {
    const productid = req.params.productid;
    try {
        const comments = await Comment.find({ productId: productid });
        res.status(200).json({ status: true, comments });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Get Comment by ID
exports.getCommentById = async (req, res) => {
    try {
        const commentId = req.params.commentid;
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ status: false, message: 'Comment not found' });
        }

        res.status(200).json({ status: true, comment });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.getCommentList = async (req, res) => {
    try {
        const productid = req.params.productid;
        const comment = await Comment.find({productId:productid});

        if (!comment) {
            return res.status(404).json({ status: false, message: 'Comments not found' });
        }

        res.status(200).json({ status: true, comment });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Update Comment
exports.updateComment = async (req, res) => modifyComment(req, res, async (commentId, updateData) => {
    return await Comment.findByIdAndUpdate(commentId, {edited:true,...updateData}, { new: true });
})

// Delete Comment
exports.deleteComment = async (req, res) => modifyComment(req, res, async (commentId) => {
    return await Comment.findByIdAndDelete(commentId);
});

