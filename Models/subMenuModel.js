const mongoose = require('mongoose');

const subMenuSchema = new mongoose.Schema({
  menuTitle: {
    nepali: {
      type: String,
      required:  [true, 'Please enter a title in nepali']
    },
    english: {
      type: String,
      required:  [true, 'Please enter a title english']
    }
  },
  parentMenuId:{
    type: String,
    required:true
  },
  menuImage: {
    type: String
  },
  menuUrl: {
    type: String
  },
  menuItemOrder: {
    type: Number
  },
  menuDisplayLocationId: {
    type: String
  }
});

const SubMenu = mongoose.model('SubMenu', subMenuSchema);

module.exports = SubMenu;
