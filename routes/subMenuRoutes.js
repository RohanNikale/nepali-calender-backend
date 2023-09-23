const express = require('express');
const router = express.Router();
const { createSubMenu, updateSubMenu, deleteSubMenu, getSubMenuList } = require('../Controller/subMenuController'); // Adjust the path as needed
<<<<<<< HEAD
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');
=======
>>>>>>> Rating-CRUD

// Create SubMenu
router.post('/createSubMenu',isAuthenticatedAdmin, createSubMenu);

// Update SubMenu
router.put('/updateSubMenu/:submenuid',isAuthenticatedAdmin, updateSubMenu);

// Delete SubMenu
router.delete('/deleteSubMenu/:submenuid',isAuthenticatedAdmin, deleteSubMenu);

// Read SubMenu
router.get('/getSubMenuList/:parentsubmenuid', getSubMenuList);

module.exports = router;
