const mongoose = require("mongoose");
const validator = require("validator");

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Invalid email address."],
      required: [true, "A valid email address is required."],
      unique: true,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.models.Email || mongoose.model("Email", Schema);
