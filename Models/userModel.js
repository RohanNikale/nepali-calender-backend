const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
    },
    adminAccess: {
      type: Boolean

    },
    profilePic: {
      type: String,
    },
    emailView: {
      type: String,
      enum: ["Only Me", "Public"],
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    horoscope: {
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
    },
    religion: {
      type: String,
    },
    address: {
      type: String,
    },
    addressView: {
      type: String,
      enum: ["Only Me", "Public"],
    },
    number: {
      type: String,
    },
    otp: {
      type: String,
    },
    otpExpiration: {
      type: Date,
      // 10 minutes
    },
    relationshipStatus: {
      type: String,
      enum: ["unmarried", "married"],
    },
    relationshipStatusView: {
      type: String,
      enum: ["Only Me", "Public"],
    },
    marriedSince: {
      type: Date,
    },
    workStatus: {
      type: String,
      enum: ["employed", "unemployed", "student"],
    },
    workStatusView: {
      type: String,
      enum: ["Only Me", "Public"],
    },
    companies: {
      type: Object,
    },
    password: String,
  },
  { timestamps: true }
);

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("user", userSchema);
