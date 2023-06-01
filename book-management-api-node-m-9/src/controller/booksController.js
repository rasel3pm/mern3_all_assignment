const Book = require("../models/book.js");
// This function gets all books from the database.
exports.getBooks = async (req, res) => {
  // Try to find all books from the database.
  try {
    // Find all books from the database.
    const book = await Book.find();
    if (book) {
      res.status(202).json({ message: "Success get Books", book });
    }
    // Catch any errors that occur.
  } catch (err) {
    res.status(404).json({ error: "Failed to get all Books" });
  }
};
// This function gets books by id from the database.
exports.getBookById = async (req, res) => {
  try {
    // Get the book ID from the request parameters.
    const bookId = req.params.id;
    // Find the book in the database by its ID.
    const findBook = await Book.findById({ _id: bookId });
    if (findBook) {
      res.status(200).json({ message: "find book by Id", findBook });
    }
    // Catch any errors that occur.
  } catch (err) {
    res.status(404).json({ message: "Not found book" });
  }
};
// This function create book to the database.
exports.createNewBook = async (req, res) => {
  try {
    // Get the book data from the request body.
    const { title, author, description, publishedYear } = req.body;
    // Create a new Book object.
    const book = await new Book({
      title,
      author,
      description,
      publishedYear,
    });
    // Save the book to the database.
    const newBook = await book.save();
    // Return a success response with the new book data.
    res.status(200).json({ message: "Book create success", newBook });
    // Catch any errors that occur.
  } catch (err) {
    res.status(404).json({ error: "Something went wrong", err });
  }
};

// This function updates a book in the database.
exports.updateBookById = async (req, res) => {
  try {
    // Get the book ID from the request parameters.
    const bookId = req.params.id;
    // Find the book in the database.
    const updateBook = await Book.findByIdAndUpdate(
      { _id: bookId },
      { $set: req.body },
      { new: true }
    );
    // Save the updated book to the database.
    await updateBook.save();
    res.status(200).json({ message: "Success update Book", updateBook });
  } catch (err) {
    res.status(404).json({ error: "Failed to update Book", err });
  }
};
// This function delete a book by ID in the database.
exports.deleteBookById = async (req, res) => {
  try {
    // Get the book ID from the request parameters.
    const bookId = req.params.id;
    const bookDelete = await Book.findByIdAndDelete({ _id: bookId });
    if (bookDelete) {
      res.status(200).json({ message: "Book delete success", bookDelete });
    }
  } catch (err) {
    res.status(204).json({ error: "Book not delete", err });
  }
};
