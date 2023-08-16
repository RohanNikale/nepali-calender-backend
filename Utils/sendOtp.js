const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: process.env.SMS_API_KEY,
    apiSecret: process.env.SECRET_API_KEY
});

const sendOtp = async (number, otp) => {
    const from = 'Vonage APIs';
    const to = number;
    const text = `Your OTP is ${otp}`;

    try {
        const response = await vonage.sms.send({ to, from, text });
        console.log('Message sent successfully:', response);
    } catch (error) {
        console.error('Error sending the message:', error);
    }
};

module.exports = sendOtp;
