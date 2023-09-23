const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  productId: {
    type: String,
    ref: 'Product',
    required: true
  },
  userId:{
    type:String,
    required:true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  reviewTitle:{
    type : String ,
  },
  review: {
    type:String
  }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
