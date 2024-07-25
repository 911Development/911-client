const mongoose = require("mongoose");
const Email = require("./Email").schema;

const Schema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is required."],
      trim: true,
    },

    lastname: {
      type: String,
      required: [true, "Lastname is required."],
      trim: true,
    },

    email: {
      type: Email,
      default: () => ({}),
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
