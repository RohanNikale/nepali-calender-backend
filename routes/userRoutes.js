const express = require("express");
const router = express.Router();
const {isAuthenticatedUser}=require('../Middleware/auth')
const { updateUser,getUserInfoById } = require('../Controller/userController');

//Update user Route
router.put("/updateuser",isAuthenticatedUser, updateUser);

// Get user Route
router.get("/getuser", getUserInfoById);


module.exports = router;
