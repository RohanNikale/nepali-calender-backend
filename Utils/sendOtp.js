const twilio = require('twilio');

// Your Twilio Account SID and Auth Token
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create a Twilio client instance
const client = new twilio(accountSid, authToken);

// Function to send an OTP via SMS
function sendOtp(recipientPhoneNumber,otp) {
    const message = `Your OTP is: ${otp} Do Not Share This code with anyone`;

    return client.messages.create({
        body: message,
        from: '+18146664052',
        to: recipientPhoneNumber
    });
}


module.exports = sendOtp;
