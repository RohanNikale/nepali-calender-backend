const express = require('express');
const router = express.Router();
const { createSuvaSaits, updateSuvaSaits, deleteSuvaSaits, getSuvaSaitsData } = require('../Controller/suvaSaits');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create SuvaSaits
router.post('/createsuvasaits', isAuthenticatedAdmin, createSuvaSaits);

// Update SuvaSaits
router.put('/updatesuvasaits', isAuthenticatedAdmin, updateSuvaSaits);

// Delete SuvaSaits
router.delete('/deletesuvasaits', isAuthenticatedAdmin, deleteSuvaSaits);

// Read SuvaSaits
router.get('/getsuvasaitsdata', getSuvaSaitsData);

module.exports = router;
