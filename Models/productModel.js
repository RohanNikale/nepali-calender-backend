const mongoose = require('mongoose');

// Create a Mongoose schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productTitle: {
    nepali: {
      type: String,
      required: true
    },
    english: {
      type: String,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  },
  productMedia: {
    YTvideoLink: {
      type: String
    },
    images: {
      type: Object
    }
  },
  productPrice: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

// Create a Mongoose model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
