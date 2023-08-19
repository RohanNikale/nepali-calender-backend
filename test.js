exports.updateUserById = async (req, res) => {
    try {
        const { userId } = req.headers;
        const updatedData = req.body;
        if(!userId && !updatedData && !req.user.id===userId){
            return res.status('Access denied.')
        }
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData);

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
