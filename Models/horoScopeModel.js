const mongoose = require("mongoose");

const horoScopeSchema = new mongoose.Schema({
  userId: {
    type: String,
    // required: true,
  },
  pageTitle: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  title: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  fetureImg: {
    type: String,
    // required: true,
  },
  startingLetter: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  description: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  luckyNumber: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  luckyColor: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  luckyDays: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  luckyStone: {
    nepali: {
      type: String,
      // required: true
    },
    english: {
      type: String,
      // required: true
    }
  },
  luckyDetail: {
    type: Array
  }
});

module.exports = mongoose.model("horoScope", horoScopeSchema);
