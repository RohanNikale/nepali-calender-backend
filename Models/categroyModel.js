const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  categoryName: {
    type: String,
    required: true,
    unique: true
  },
  parentCategory: {
    type: String,
    ref: 'Category'
  },
  childCategory: [{
    type: String,
    ref: 'Category'
  }]
});

module.exports = mongoose.model('Category', categorySchema);
