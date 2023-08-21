const jwt = require("jsonwebtoken");
const User = require('../models/userModel');

exports.isAuthenticatedAdmin = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Please log in to access this resource" });
    }

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decodedData.id);
        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }
        
        if (!(user.adminAccess)) {
            return res.status(403).json({
                status: false,
                message: 'Only admin users have access'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
