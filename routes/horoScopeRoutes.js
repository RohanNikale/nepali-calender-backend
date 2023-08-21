const express = require("express");
const router = express.Router();
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');



const {
    createHoroscope,
    updateHoroscope,
    deleteHoroscope,
    getHoroscopeData,
} = require("../Controller/horoScopeController.js");

const {
    createRashifal,
    updateRashifal,
    deleteRashifal,
    getRashifalData,
} = require("../Controller/rashifalController");

// Create a new horoscope
router.post("/createhoroscope",isAuthenticatedAdmin, createHoroscope);

// Update a horoscope
router.put("/updatehoroscope",isAuthenticatedAdmin, updateHoroscope);

// Delete a horoscope
router.delete("/deletehoroscope",isAuthenticatedAdmin, deleteHoroscope);

// Get horoscope data
router.get("/gethoroscope", getHoroscopeData);




// Rashifal 

// Create Horoscope
router.post('/addrashifal', isAuthenticatedAdmin, createRashifal);

// Update Horoscope
router.put('/updaterashifal', isAuthenticatedAdmin, updateRashifal);

// Delete Rashifal
router.delete('/deleteRashifal', isAuthenticatedAdmin, deleteRashifal);

// Read Rashifal
router.get('/getRashifaldata', getRashifalData);

module.exports = router;
