const express = require('express');
const router = express.Router();
const { createAdvertisement, updateAdvertisement, deleteAdvertisement, getAdvertisementData,getAdvertisementList } = require('../Controller/advertisementController');
const { isAuthenticatedUser } = require('../Middleware/auth');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Advertisement
router.post('/createAdvertisement', isAuthenticatedUser, createAdvertisement);

// Update Advertisement
router.put('/updateAdvertisement/:advertisementid', isAuthenticatedAdmin, updateAdvertisement);

// Delete Advertisement
router.delete('/deleteAdvertisement/:advertisementid', isAuthenticatedUser, deleteAdvertisement);

// Read Advertisement
router.get('/getAdvertisementData/:advertisementid', isAuthenticatedAdmin,getAdvertisementData);

router.get('/getAdvertisementList',getAdvertisementList);

module.exports = router;
