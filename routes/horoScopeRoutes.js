const express = require("express");
const router = express.Router();
const {
    createHoroscope,
    updateHoroscope,
    deleteHoroscope,
    getHoroscopeData,
} = require("../Controller/horoScopeController.js");

// Create a new horoscope
router.post("/createhoroscope", createHoroscope);

// Update a horoscope
router.put("/updatehoroscope", updateHoroscope);

// Delete a horoscope
router.delete("/deletehoroscope", deleteHoroscope);

// Get horoscope data
router.get("/gethoroscope", getHoroscopeData);

module.exports = router;
