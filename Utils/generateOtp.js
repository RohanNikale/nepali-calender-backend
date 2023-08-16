const otpGenerator = require('otp-generator');

const generateOtp = () => {
    return otpGenerator.generate(5, { digits: true });
};

module.exports = generateOtp;
