const express = require('express');
const router = express.Router();
const { createEvent, updateEvent, deleteEvent, getEventData } = require('../Controller/eventController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Event
router.post('/createevent', isAuthenticatedAdmin, createEvent);

// Update Event
router.put('/updateevent', isAuthenticatedAdmin, updateEvent);

// Delete Event
router.delete('/deleteevent', isAuthenticatedAdmin, deleteEvent);

// Read Event
router.get('/geteventdata', getEventData);

module.exports = router;
