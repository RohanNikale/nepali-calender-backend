const express = require("express");
const router = express.Router();
const isAuthenticatedUser=require('../Middleware/auth')
const { updateUser } = require('../Controller/userController');

//Update user
router.put("/updateuser",isAuthenticatedUser, updateUser);


module.exports = router;
