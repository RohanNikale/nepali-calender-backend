const express = require('express');
const menuController = require('../Controller/menuContorller');

const router = express.Router();

router.post('/createMenu', menuController.createMenu);
router.put('/updateMenu/:menuid', menuController.updateMenu);
router.delete('/deleteMenu/:menuid', menuController.deleteMenu);
router.get('/getMenuList', menuController.getMenuList);

module.exports = router;