const express = require('express');
const router = express.Router();
const { createSuvaSaits, updateSuvaSaits, deleteSuvaSaits, getSuvaSaitsData } = require('../Controller/suvaSaits');
const { isAuthenticatedUser } = require('../Middleware/auth');

// Create SuvaSaits
router.post('/createsuvasaits', isAuthenticatedUser, createSuvaSaits);

// Update SuvaSaits
router.put('/updatesuvasaits', isAuthenticatedUser, updateSuvaSaits);

// Delete SuvaSaits
router.delete('/deletesuvasaits', isAuthenticatedUser, deleteSuvaSaits);

// Read SuvaSaits
router.get('/getsuvasaitsdata', getSuvaSaitsData);

module.exports = router;
