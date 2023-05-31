const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      split: true,
    },
    author: {
      type: String,
      require: true,
      split: true,
    },
    description: {
      type: String,
      require: true,
    },
    publishedYear: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
