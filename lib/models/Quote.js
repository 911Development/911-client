const mongoose = require("mongoose");
const Email = require("./Email").schema;

const Schema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is required."],
      trim: true,
    },

    email: {
      type: Email,
      default: () => ({}),
    },

    phone: {
      type: String,
      unique: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },

    fields: {
      type: [String],
      required: [true, "At least one field is required."],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.models.Quote || mongoose.model("Quote", Schema);
