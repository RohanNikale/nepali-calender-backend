const User=require('../Models/userModel')
// User CRUD

// update User by Id
exports.updateUser = async (req, res) => {
    try {
        const updatedData = req.body;

        const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedData);

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User updated successfully',
            updatedUser,
        });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error in Update API',
            error,
        });
    }
};



// Get user info by user ID
exports.getUserInfoById = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success:false,
                message:'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'successfully',
            user:req.user,
        })
        
    } catch (error) {
        throw error;
    }
};

exports.getUserList = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter
        const perPage = parseInt(req.query.perPage) || 10; // Number of users per page

        const users = await User.find()
            .select("+email")
            .skip((page - 1) * perPage) // Skip users on previous pages
            .limit(perPage); // Limit the number of users per page

        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Users not found on this page',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Successfully',
            users: users,
            currentPage: page,
            totalPages: Math.ceil(await User.countDocuments() / perPage),
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
