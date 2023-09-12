const mongoose = require("mongoose");

const wordSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter the title"],
    },
    items: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const wordsSchema = mongoose.Schema(
  {
    data: {
      type: [wordSchema], 
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Words", wordsSchema);
