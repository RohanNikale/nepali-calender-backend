const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true
  },
  businessType: {
    type: String,
    required: true
  },
  businessDescription: {
    type: String,
    required: true
  },
  websiteURL: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  whatsappNumber: {
    type: String,
    required: true
  },
  officeLocation: {
    type: String,
    required: true
  },
  googleMapLink: {
    type: String,
    required: true
  }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
