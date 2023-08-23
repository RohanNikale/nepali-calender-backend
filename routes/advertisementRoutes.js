const express = require('express');
const router = express.Router();
const { createAdvertisement, updateAdvertisement, deleteAdvertisement, getAdvertisementData } = require('../Controller/advertisementController');
const { isAuthenticatedUser } = require('../Middleware/auth');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Advertisement
router.post('/createAdvertisement', isAuthenticatedUser, createAdvertisement);

// Update Advertisement
router.put('/updateAdvertisement/:advertisementid', isAuthenticatedAdmin, updateAdvertisement);

// Delete Advertisement
router.delete('/deleteAdvertisement/:advertisementid', isAuthenticatedAdmin, deleteAdvertisement);

// Read Advertisement
router.get('/getAdvertisementData/:advertisementid', isAuthenticatedAdmin);

module.exports = router;
