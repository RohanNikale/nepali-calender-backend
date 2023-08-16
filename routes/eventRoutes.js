const express = require('express');
const router = express.Router();
const {createEvent}=require('../Controller/eventController')
const {isAuthenticatedUser} = require('../Middleware/auth')

router.route('/createevent').post(isAuthenticatedUser, createEvent);
module.exports = router;
