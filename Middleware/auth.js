const jwt = require("jsonwebtoken");
const User = require('../models/userModel');


exports.isAuthenticatedUser =async(req,res,next)=>{

    const {token} = req.headers;

   if(!token){
    return res.status(401).send("please Login to access this resource");
   }

   const decodedData = jwt.verify(token, process.env.JWT_SECRET);

   req.user = await User.findById(decodedData.id);
   next();

};

