const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
  userId: {
    type: String,
    // required: true
  },
  adName: {
    type: String,
    // required: true
  },
  yourName: {
    type: String,
    // required: true
  },
  Phone: {
    type: String,
    // required: true
  },
  adFormat: {
    type: String,
    enum: ['single image', 'Carousel'],
    // required: true
  },
  imageOrVideo: {
    type: Object
    // You might want to define specific properties within this object, like 'url', 'type', etc.
  },
  numberOfDays: {
    type: Number,
    enum: [15, 30, 360],
    // required: true
  },
  accept: {
    type: Boolean
  },
  status: {
    type: String,
    enum: ['active', 'expired','pending']
  }
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;
