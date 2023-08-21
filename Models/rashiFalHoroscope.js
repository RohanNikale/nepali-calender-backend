const mongoose = require('mongoose');

const rashifalSchema = new mongoose.Schema({
  horoscopeName: {
    type: String,
    enum: [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces",
    ],
    // required: true,
    // unique: true
  },
  rashifalType:{
    type:String,
    // enum:['daily','weekly','monthly','yearly'],
    // required:true
  },
  rashifal: {
    nepali: String,
    english: String
  },
  audioFile:{
    type:String,
  },
  rashifalVideoLink: {
    type:String
  }
});

module.exports=mongoose.model('rashifalHoroscope', rashifalSchema);
