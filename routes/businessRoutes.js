const express = require('express');
const router = express.Router();
const { createBusiness, updateBusiness, deleteBusiness, getBusinessData } = require('../Controller/BusinessController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Event
router.post('/createBusiness', isAuthenticatedAdmin, createBusiness);

// Update Event
router.put('/updateBusiness', isAuthenticatedAdmin, updateBusiness);

// Delete Event
router.delete('/deleteBusiness', isAuthenticatedAdmin, deleteBusiness);

// Read Event
router.get('/getBusinessdata', getBusinessData);

module.exports = router;
