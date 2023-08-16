const express = require('express');
const router = express.Router();
const {createEvent,updateEvent}=require('../Controller/eventController')
const {isAuthenticatedUser} = require('../Middleware/auth')

router.route('/createevent').post(isAuthenticatedUser, createEvent);
router.route('/updateevent').put(isAuthenticatedUser, updateEvent);
module.exports = router;
