const express = require('express');
const router = express.Router();
const { createCategory, updateCategory, deleteCategory, getCategoryData } = require('../Controller/categoryController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Event
router.post('/createcategory', isAuthenticatedAdmin, createCategory);

// Update Event
router.put('/updatecategory/:categoryid', isAuthenticatedAdmin, updateCategory);

// Delete Event
router.delete('/deletecategory/:categoryid', isAuthenticatedAdmin, deleteCategory);

// Read Event
router.get('/getcategorydata/:categoryid', getCategoryData);

module.exports = router;
