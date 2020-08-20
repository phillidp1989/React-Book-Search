const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: String,
  description: String,
  image: String,
  url: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;