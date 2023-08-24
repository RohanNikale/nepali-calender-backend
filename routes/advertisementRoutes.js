const express = require('express');
const router = express.Router();
const { createAdvertisement, updateAdvertisement, deleteAdvertisement, getAdvertisementData } = require('../Controller/advertisementController');
const { isAuthenticatedUser } = require('../Middleware/auth');

// Create Advertisement
router.post('/createAdvertisement', isAuthenticatedUser, createAdvertisement);

// Update Advertisement
router.put('/updateAdvertisement/:advertisementid', isAuthenticatedUser, updateAdvertisement);

// Delete Advertisement
router.delete('/deleteAdvertisement/:advertisementid', isAuthenticatedUser, deleteAdvertisement);

// Read Advertisement
router.get('/getAdvertisementData/:advertisementid', getAdvertisementData);

module.exports = router;
