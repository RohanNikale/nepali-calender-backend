const express = require('express');
const router = express.Router();
const { createReplay, updateReplay, deleteReplay, getReplayById, getReplayList } = require('../Controller/replayController');
const { isAuthenticatedUser } = require('../Middleware/auth');

// Create Replay
router.post('/createReplay', isAuthenticatedUser, createReplay);

// Update Replay
router.put('/updateReplay/:replayid', isAuthenticatedUser, updateReplay);

// Delete Replay
router.delete('/deleteReplay/:replayid', isAuthenticatedUser, deleteReplay);

// replay List
router.get('/getReplayList/:commentid', getReplayList);

// Read Replay
router.get('/getReplaydata/:replayid', getReplayById);

module.exports = router;
