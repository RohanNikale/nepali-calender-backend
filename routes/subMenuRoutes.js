const express = require('express');
const router = express.Router();
const { createSubMenu, updateSubMenu, deleteSubMenu, getSubMenuAllData } = require('../Controller/subMenuController'); // Adjust the path as needed

// Create SubMenu
router.post('/createSubMenu', createSubMenu);

// Update SubMenu
router.put('/updateSubMenu/:submenuid', updateSubMenu);

// Delete SubMenu
router.delete('/deleteSubMenu/:submenuid', deleteSubMenu);

// Read SubMenu
router.get('/getSubMenuAllData/:parentsubmenuid', getSubMenuAllData);

module.exports = router;
