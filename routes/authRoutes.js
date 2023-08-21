const express = require("express");
const router = express.Router();
const {
  SignUpLoginByOtp,
  verifyOtp,
  SignUpAndLogin,
} = require("../Controller/authController.js");

// Send OTP
router.post("/send-otp", SignUpLoginByOtp);

// Verify OTP
router.post("/verify-otp", verifyOtp);

//REGISTER || POST
router.post("/signup-login", SignUpAndLogin);

module.exports = router;
