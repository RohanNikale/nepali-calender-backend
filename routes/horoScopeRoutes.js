const express = require("express");
const router = express.Router();
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');



const {createHoroscope,updateHoroscope,deleteHoroscope,getHoroscopeData,getHoroscopeList} = require("../Controller/horoScopeController.js");


// Create a new horoscope
router.post("/createhoroscope",isAuthenticatedAdmin, createHoroscope);

// Update a horoscope
router.put("/updatehoroscope/:horoscopeid",isAuthenticatedAdmin, updateHoroscope);

// Delete a horoscope
router.delete("/deletehoroscope/:horoscopeid",isAuthenticatedAdmin, deleteHoroscope);

// Get horoscope data
router.get("/gethoroscope/:horoscopeid", getHoroscopeData);

router.get("/gethoroscopeList", getHoroscopeList);


module.exports = router;
