const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    project_title: {
      type: String,
      trim: true,
    },

    project_description: {
      type: String,
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

module.exports = mongoose.models.Project || mongoose.model("Project", Schema);
