const express = require('express');
const router = express.Router();
const { createEvent, updateEvent, deleteEvent, getEventData, getEventList } = require('../Controller/eventController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Event
router.post('/createevent', isAuthenticatedAdmin, createEvent);

// Update Event
router.put('/updateevent/:eventid', isAuthenticatedAdmin, updateEvent);

// Delete Event
router.delete('/deleteevent/:eventid', isAuthenticatedAdmin, deleteEvent);

// Read Event
router.get('/geteventdata/:eventid', getEventData);

router.get('/geteventList', getEventList);

module.exports = router;
