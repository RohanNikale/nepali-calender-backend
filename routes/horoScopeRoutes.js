const express = require("express");
const router = express.Router();
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

const {
    createHoroscope,
    updateHoroscope,
    deleteHoroscope,
    getHoroscopeData,
} = require("../Controller/horoScopeController.js");

// Create a new horoscope
router.post("/createhoroscope",isAuthenticatedAdmin, createHoroscope);

// Update a horoscope
router.put("/updatehoroscope",isAuthenticatedAdmin, updateHoroscope);

// Delete a horoscope
router.delete("/deletehoroscope",isAuthenticatedAdmin, deleteHoroscope);

// Get horoscope data
router.get("/gethoroscope", getHoroscopeData);

module.exports = router;
