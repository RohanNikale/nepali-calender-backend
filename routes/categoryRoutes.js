const express = require('express');
const router = express.Router();
const { createCategory, updateCategory, deleteCategory, getCategoryData } = require('../Controller/categoryController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Event
router.post('/createcategory', isAuthenticatedAdmin, createCategory);

// Update Event
router.put('/updatecategory', isAuthenticatedAdmin, updateCategory);

// Delete Event
router.delete('/deletecategory', isAuthenticatedAdmin, deleteCategory);

// Read Event
router.get('/getcategorydata', getCategoryData);

module.exports = router;
