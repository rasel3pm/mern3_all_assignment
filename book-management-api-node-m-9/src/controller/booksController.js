const Book = require("../models/book.js");
//get all Books
exports.getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    if (book) {
      res.status(202).json({ message: "Success get Books", book });
    }
  } catch (err) {
    res.status(404).json({ error: "Failed to get all Books" });
  }
};

//get Book by id
exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const findBook = await Book.findById({ _id: bookId });
    if (findBook) {
      res.status(200).json({ message: "find book by Id", findBook });
    }
  } catch (err) {
    res.status(404).json({ message: "Not found book" });
  }
};
//create Book
exports.createNewBook = async (req, res) => {
  try {
    const { title, author, description, publishedYear } = req.body;
    const book = await new Book({
      title,
      description,
      author,
      publishedYear,
    });
    const newBook = await book.save();
    res.status(200).json({ message: "Book create success", newBook });
  } catch (err) {
    res.status(404).json({ error: "Something went wrong", err });
  }
};
//get all task

//update Book by Id
exports.updateBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(
      { _id: bookId },
      { $set: req.body },
      { new: true }
    );
    await updateBook.save();
    res.status(200).json({ message: "Success update Book", updateBook });
  } catch (err) {
    res.status(404).json({ error: "Failed to update Book", err });
  }
};
//delete Book by Id
exports.deleteBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookDelete = await Book.findByIdAndDelete({ _id: bookId });
    if (bookDelete) {
      res.status(200).json({ message: "Book delete success", bookDelete });
    }
  } catch (err) {
    res.status(204).json({ message: "Book not delete", bookDelete });
  }
};
