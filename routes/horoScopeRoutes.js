const express = require("express");
const router = express.Router();
const {
  postHoroScope,
  getAllHoroScope,
  getSingleHoroScope,
  updateHoroScope,
  deleteHoroScope,
} = require("../Controller/horoScopeController");

// post horoScope
router.post("/create", postHoroScope);

// get all horoScopes
router.get("/getall", getAllHoroScope);

// get single horoscope
router.get("/get/:id", getSingleHoroScope);

// update horoscope
router.put("/update/:id", updateHoroScope);

// delete horoscope
router.delete("/delete/:id", deleteHoroScope);

module.exports = router;
