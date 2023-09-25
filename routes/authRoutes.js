const express = require("express");
const router = express.Router();
const {
  SignUpLoginByOtp,
  verifyOtp,
  SignUpAndLogin,
} = require("../Controller/authController.js");
const { adminLogin, ragistorAdmin } = require("../Controller/authController");
const { isAuthenticatedAdmin } = require("../Middleware/adminAuth");

// Send OTP
router.post("/send-otp", SignUpLoginByOtp);

// Verify OTP
router.post("/verify-otp", verifyOtp);

//REGISTER || POST
router.post("/signup-login", SignUpAndLogin);


router.post("/adminlogin", adminLogin);
router.post("/ragistoradmin", isAuthenticatedAdmin,ragistorAdmin);

module.exports = router;
