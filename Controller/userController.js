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
