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
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

module.exports = mongoose.models.Quote || mongoose.model("Quote", Schema);
