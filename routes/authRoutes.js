const express = require('express');
const router = express.Router();
const {
    registerByOtp,
    verifyOtp,
} = require('../controller/authController');


router.route('/auth/send-otp').post(registerByOtp);
router.route('/auth/verify-otp').post(verifyOtp);
module.exports = router;
