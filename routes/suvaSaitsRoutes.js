const express = require('express');
const router = express.Router();
const { createSuvaSaits, updateSuvaSaits, deleteSuvaSaits, getSuvaSaitsData, getSuvaSaitsList } = require('../Controller/suvaSaits');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create SuvaSaits
router.post('/createsuvasaits', isAuthenticatedAdmin, createSuvaSaits);

// Update SuvaSaits
router.put('/updatesuvasaits/:suvasaitsid', isAuthenticatedAdmin, updateSuvaSaits);

// Delete SuvaSaits
router.delete('/deletesuvasaits/:suvasaitsid', isAuthenticatedAdmin, deleteSuvaSaits);

// Read SuvaSaits
router.get('/getsuvasaitsdata/:suvasaitsid', getSuvaSaitsData);

router.get('/getsuvasaitsList', getSuvaSaitsList);

module.exports = router;
