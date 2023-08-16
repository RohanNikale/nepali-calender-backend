const express = require('express');
const router = express.Router();
const { createEvent, updateEvent, deleteEvent, getEventData } = require('../Controller/eventController');
const { isAuthenticatedUser } = require('../Middleware/auth');

// Create Event
router.post('/createevent', isAuthenticatedUser, createEvent);

// Update Event
router.put('/updateevent', isAuthenticatedUser, updateEvent);

// Delete Event
router.delete('/deleteevent', isAuthenticatedUser, deleteEvent);

// Read Event
router.get('/geteventdata', getEventData);

module.exports = router;
