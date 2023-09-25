const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const sendToken = require("../Utils/jwtToken");
const sendOtp = require("../Utils/sendOtp");
const generateOtp = require("../Utils/generateOtp");
const { isAuthenticatedAdmin } = require("../Middleware/adminAuth");


exports.SignUpLoginByOtp = async (req, res, next) => {
    try {
        const { number } = req.body;

        if (!number) {
            return res.status(422).json({
                message: "Please provide your phone number",
                status: false,
            });
        }

        const otp = generateOtp();
        const hashedOtp = await bcrypt.hash(otp, 10);

        let userExist = false;
        let user = await User.findOne({ number });

        if (user) {
            user.otp = hashedOtp;
            user.otpExpiration = Date.now() + 5 * 60 * 1000;
            user = await user.save();
            userExist = true;
        } else {
            user = await User.create({
                number,
                name: "",
                otp: hashedOtp,
                otpExpiration: Date.now() + 10 * 60 * 1000,
            });
        }

        // Send the OTP here

        sendOtp(number, otp);

        res.status(201).json({
            message: "The 5-digit OTP has been sent to your phone number",
            status: true,
            user,
            userExist,
        });
    } catch (error) {
        next(error);
    }
};

exports.verifyOtp = async (req, res, next) => {
    try {
        const { name, number, otp } = req.body;

        if (!number || !otp) {
            return next("Please provide a valid phone number and OTP", 422);
        }

        const user = await User.findOne({ number });

        if (!user) {
            return next("Account does not exist", 400);
        }

        const validOtp = await bcrypt.compare(otp, user.otp);

        if (!validOtp || user.otpExpiration < Date.now()) {
            return next("The OTP you entered is invalid, expired, or used");
        }

        if (!user.name) {
            user.name = name;
        }

        user.otp = "";
        user.otpExpiration = "";
        await user.save();

        sendToken(user, 200, res);
    } catch (error) {
        next(error);
    }
};

exports.SignUpAndLogin = async (req, res) => {
    try {
        const { email,name } = req.body;
        let user;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            user = new User({email,name});
            await user.save();
            return sendToken(user, 200, res);
        }
        return sendToken(existingUser, 200, res);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in Register API',
            error,
        });
    }
};

exports.ragistorAdmin = async (req, res) => {
    try {
if(!req.user.adminAccess){
    return res.status(404).josn({status:false,message:'You are not authorized to access'})
}
      const { name, email, password, cpassword} = req.body
      if (password === cpassword) {
          // password secure using bcrypt
          const secPassword = await bcrypt.hash(password, 8)
          // creating user
          const createUser = new User({ name, email, password: secPassword,adminAccess:true })
          // generating token

          // saving user to database
          await createUser.save()
          // response
          return sendToken(createUser,201,res)
      }
      else {
          return res.status(404).josn({success: false,message:'Password not match'})
      }
  } catch(error) {
      console.log(error)
      return response(res,404,error)
  }
};
exports.adminLogin=async(req,res)=>{
    const { email, password } = req.body
    try {

        const userData = await User.findOne({ email: email })
        if(!userData.adminAccess){
            return res.status(404).josn({status:false,message:'You are not authorized to access'})
        }
        const passwordCheck = await bcrypt.compare(password, userData.password)
        if (passwordCheck) {
            return sendToken(userData,201,res)
        }
        else {
            return res.status(401).json({status:false,message:'You are not authorized to access'})
        }
    } catch {
        return res.status(401).json({status:false,message:'You are not authorized to access'})
    }
};
