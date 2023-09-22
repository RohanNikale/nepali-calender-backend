// controllers/menuController.js
const Menu = require('../models/menuModel');

async function modifyMenu(res, action) {
    try {
        const result = await action();

        if (!result) {
            return res.status(404).json({ status: false, message: 'Menu not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', menu: result });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

exports.createMenu = async (req, res) => {
    try {
        const { createMenu } = req.body;

        const newMenu = new Menu({ createMenu });
        await newMenu.save();

        res.status(201).json({
            message: 'Successfully created menu',
            status: true,
            menu: newMenu,
        });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.getMenuList = async (req, res) => {
    try {
        const menus = await Menu.find();

        res.status(200).json({ status: true, menus });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.updateMenu = async (req, res) => {
    const menuId = req.params.menuid;
    const { createMenu } = req.body;

    await modifyMenu(res, async () => {
        return await Menu.findByIdAndUpdate(menuId, { createMenu });
    });
};

exports.deleteMenu = async (req, res) => {
    const menuId = req.params.menuid;

    await modifyMenu(res, async () => {
        return await Menu.findByIdAndDelete(menuId);
    });
};
