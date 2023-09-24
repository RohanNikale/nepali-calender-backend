const express = require("express");
const router = express.Router();
const {isAuthenticatedUser}=require('../Middleware/auth')
const { updateUser,getUserInfoById,getUserList } = require('../Controller/userController');
const { isAuthenticatedAdmin } = require("../Middleware/adminAuth");

//Update user Route
router.put("/updateuser",isAuthenticatedUser, updateUser);

// Get user Route
router.get("/getuser",isAuthenticatedUser, getUserInfoById);

router.get("/getuserlist",isAuthenticatedAdmin, getUserList);


module.exports = router;
