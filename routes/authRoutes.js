const express = require("express");
const router = express.Router();
const {
  registerByOtp,
  verifyOtp,
  registerWithLoginController,
} = require("../Controller/authController.js");

// Send OTP
router.post("/send-otp", registerByOtp);

// Verify OTP
router.post("/verify-otp", verifyOtp);

//REGISTER || POST
router.post("/register", registerWithLoginController);

module.exports = router;
