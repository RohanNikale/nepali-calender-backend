const mongoose = require("mongoose");

const horoScopeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  pageTitleinNepali: {
    type: String,
    required: true,
  },
  pageTitleinEnglish: {
    type: String,
    required: true,
  },
  viewMode: {
    type: String,
    required: true,
    enum: ["daily", "weekly", "monthly", "yearly"],
  },
  titleinNepali: {
    type: String,
    required: true,
  },
  titleinEnglish: {
    type: String,
    required: true,
  },
  fetureImg: {
    type: String,
    required: true,
  },
  startingLetterinNepali: {
    type: String,
    required: true,
  },
  startingLetterinEnglish: {
    type: String,
    required: true,
  },
  descriptioninEnglish: {
    type: String,
    required: true,
  },
  descriptioninNepali: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  luckyNumberinNepali: {
    type: String,
    required: true,
  },
  luckyNumberinEnglish: {
    type: String,
    required: true,
  },
  luckyColorinNepali: {
    type: String,
    required: true,
  },
  luckyColorinEnglish: {
    type: String,
    required: true,
  },
  luckyDaysinNepali: {
    type: String,
    required: true,
  },
  luckyDaysinEnglish: {
    type: String,
    required: true,
  },
  luckyStoneinNepali: {
    type: String,
    required: true,
  },
  luckyStoneinEnglish: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("horoScope", horoScopeSchema);
