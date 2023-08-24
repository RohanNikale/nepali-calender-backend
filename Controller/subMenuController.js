const SubMenu = require('../Models/subMenuModel'); // Import the SubMenu model

async function modifySubMenu(res, action) {
    try {
        const result = await action();

        if (!result) {
            return res.status(404).json({ status: false, message: 'SubMenu not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', subMenu: result });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

exports.createSubMenu = async (req, res) => {
    try {
        const newSubMenu = new SubMenu(req.body);
        await newSubMenu.save();

        res.status(201).json({
            message: 'Successfully created SubMenu',
            status: true,
            subMenu: newSubMenu,
        });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.getSubMenuList = async (req, res) => {
    try {
        const subMenus = await SubMenu.find();

        res.status(200).json({ status: true, subMenus });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.updateSubMenu = async (req, res) => {
    const subMenuId = req.params.submenuid;
    const updateData = req.body;

    await modifySubMenu(res, async () => {
        return await SubMenu.findByIdAndUpdate(subMenuId, updateData, { new: true });
    });
};

exports.deleteSubMenu = async (req, res) => {
    const subMenuId = req.params.submenuid;

    await modifySubMenu(res, async () => {
        return await SubMenu.findByIdAndDelete(subMenuId);
    });
};
