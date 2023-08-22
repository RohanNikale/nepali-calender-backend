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
router.put("/updatehoroscope/:horoscopeid",isAuthenticatedAdmin, updateHoroscope);

// Delete a horoscope
router.delete("/deletehoroscope/:horoscopeid",isAuthenticatedAdmin, deleteHoroscope);

// Get horoscope data
router.get("/gethoroscope/:horoscopeid", getHoroscopeData);




// Rashifal 

// Create Horoscope
router.post('/addrashifal', isAuthenticatedAdmin, createRashifal);

// Update Horoscope
router.put('/updaterashifal/:rashifalid', isAuthenticatedAdmin, updateRashifal);

// Delete Rashifal
router.delete('/deleteRashifal/:rashifalid', isAuthenticatedAdmin, deleteRashifal);

// Read Rashifal
router.get('/getRashifaldata/:rashifalid', getRashifalData);

module.exports = router;
