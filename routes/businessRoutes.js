const express = require('express');
const router = express.Router();
const { createBusiness, updateBusiness, deleteBusiness, getBusinessData } = require('../Controller/businessController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Event
router.post('/createBusiness', isAuthenticatedAdmin, createBusiness);

// Update Event
router.put('/updateBusiness/:businessid', isAuthenticatedAdmin, updateBusiness);

// Delete Event
router.delete('/deleteBusiness/:businessid', isAuthenticatedAdmin, deleteBusiness);

// Read Event
router.get('/getBusinessdata/:businessid', getBusinessData);

module.exports = router;
