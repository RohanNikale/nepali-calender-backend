const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require('../Middleware/auth');

const {
    createHoroscope,
    updateHoroscope,
    deleteHoroscope,
    getHoroscopeData,
} = require("../Controller/horoScopeController.js");

// Create a new horoscope
router.post("/createhoroscope",isAuthenticatedUser, createHoroscope);

// Update a horoscope
router.put("/updatehoroscope",isAuthenticatedUser, updateHoroscope);

// Delete a horoscope
router.delete("/deletehoroscope",isAuthenticatedUser, deleteHoroscope);

// Get horoscope data
router.get("/gethoroscope", getHoroscopeData);

module.exports = router;
