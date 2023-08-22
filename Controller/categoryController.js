const Category = require('../Models/categroyModel');

// Endpoint for creating a new category
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category({
            userId:req.user.id,
            categoryName: req.body.categoryName,
            parentCategory: req.body.parentCategory,
            childCategory: req.body.childCategory
        });

        await newCategory.save();

        res.status(201).json({
            message: 'Successfully created category',
            status: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Base function for updating and deleting a category
async function modifyCategory(req, res, action) {
    const categoryid = req.params.categoryid;

    try {
        const findCategory = await Category.findById(categoryid);
        if(!(findCategory.userId==req.user.id)){
            return res.status(404).json({
                success: false,
                message: 'Access denied.',
            })
        }
        if (!findCategory) {
            return res.status(404).json({ status: false, message: 'Category not found' });
        }

        const result = await action(categoryid, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'Category not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

// Endpoint for updating a category
exports.updateCategory = (req, res) => modifyCategory(req, res, async (categoryid, data) => {
    return await Category.findByIdAndUpdate(categoryid, data, { new: true });
});

// Endpoint for deleting a category
exports.deleteCategory = (req, res) => modifyCategory(req, res, async (categoryid) => {
    return await Category.findByIdAndDelete(categoryid);
});

// Endpoint for getting category data
exports.getCategoryData = async (req, res) => {
    try {
        const categoryid = req.params.categoryid;

        const category = await Category.findById(categoryid);

        if (!category) {
            return res.status(404).json({ status: false, message: 'Category not found' });
        }

        res.status(200).json({ status: true, category });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};
