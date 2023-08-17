const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const sendToken = require("../utils/jwtToken");
const sendOtp = require("../utils/sendOtp");
const generateOtp = require("../utils/generateOtp");

exports.registerByOtp = async (req, res, next) => {
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
        // const response =  sendOtp(number, otp);

        console.log({ otp });

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

exports.registerWithLoginController = async (req, res) => {
    try {
        const { email } = req.body;
        let user;

        const existingUser = await User.findOne({ email });
        console.log(existingUser)
        if (!existingUser) {
            user = new User(req.body);
            await user.save();
            return sendToken(user, 200, res);
        }
        return sendToken(existingUser, 200, res);
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error in Register API',
            error,
        });
    }
};