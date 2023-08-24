const express = require('express');
const router = express.Router();
const {
  createRating,
  getAllRatings,
  getRatingById,
  updateRating,
  deleteRating
} = require('../Controller/ratingController'); // Update the controller import
const {isAuthenticatedUser}=require('../Middleware/auth')

// Create Rating
router.post('/createrating',isAuthenticatedUser, createRating);

// Get All Ratings
router.get('/getratinglist/:productid', getAllRatings);

// Get Rating by ID
router.get('/getrating/:ratingid', getRatingById);

// Update Rating
router.put('/updaterating/:ratingid',isAuthenticatedUser, updateRating);

// Delete Rating
router.delete('/deleterating/:ratingid',isAuthenticatedUser, deleteRating);

module.exports = router;
