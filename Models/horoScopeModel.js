const mongoose = require("mongoose");

const horoScopeSchema = new mongoose.Schema({
  userId: {
    type: String,
    // required:  [true, 'Please Provide valid token'],
  },
  pageTitle: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a page title in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a page title in english']
    }
  },

  horoscopeDisplay:{
    type:String,
    enum:['daily','weekly','monthly','yearly'],
    // required:  [true, 'Please select horoscope display']
  }
  ,
  selectedHoroscope: {
    type:String
  },
  fetureImg: {
    type: Object,
    // required:  [true, 'Please select Image']
  },
  audioFile:{
    type:Object,
  },
  horoscopeVideoLink: {
    type:String
  },
  startingLetter: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a Starting letter in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a title in english']
    }
  },
  description: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a descripation in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a descripation in english']
    }
  },
  luckyNumber: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a lucky Number in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a lucky Number in english']
    }
  },
  luckyColor: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a lucky color in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a lucky color in english']
    }
  },
  luckyDays: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a lucky Days in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a lucky days in english']
    }
  },
  luckyStone: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a lucky stone in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a lucky stone in english']
    }
  },
  rulingPlanet: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a Ruling Planet in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a Ruling Planet in english']
    }
  },
  Symbol: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a Symbol in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a Symbol in english']
    }
  },
  Element: {
    nepali: {
      type: String,
      // required:  [true, 'Please enter a Element in nepali']
    },
    english: {
      type: String,
      // required:  [true, 'Please enter a Element in english']
    }
  },
  luckyDetails: {
    type: Object,
    // required:  [true, 'Please add your lucky details']
  }
});

module.exports = mongoose.model("horoScope", horoScopeSchema);
