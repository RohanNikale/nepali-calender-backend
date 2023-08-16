const express = require('express');
const router = express.Router();
const {registerByOtp,verifyOtp} = require('../Controller/authController.js');


router.route('/send-otp').post(registerByOtp);
router.route('/verify-otp').post(verifyOtp);
module.exports = router;
