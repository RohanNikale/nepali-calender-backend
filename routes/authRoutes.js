const express = require('express');
const router = express.Router();
const { registerByOtp, verifyOtp } = require('../Controller/authController.js');

// Send OTP
router.post('/send-otp', registerByOtp);

// Verify OTP
router.post('/verify-otp', verifyOtp);

module.exports = router;
