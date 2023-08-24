const express = require('express');
const router = express.Router();
const { createComment, updateComment, deleteComment, getCommentById, getCommentList } = require('../Controller/commentController');
const { isAuthenticatedUser } = require('../Middleware/auth');

// Create Comment
router.post('/createcomment', isAuthenticatedUser, createComment);

// Update Comment
router.put('/updatecomment/:commentid', isAuthenticatedUser, updateComment);

// Delete Comment
router.delete('/deletecomment/:commentid', isAuthenticatedUser, deleteComment);

// Comment List
router.get('/getcommentList/:productid', getCommentList);

// Read Comment
router.get('/getcommentdata/:commentid', getCommentById);

module.exports = router;
