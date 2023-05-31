const express = require("express");
const {
  getBooks,
  getBookById,
  createNewBook,
  updateBookById,
  deleteBookById,
} = require("../controller/booksController");
const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", createNewBook);
router.put("/books/:id", updateBookById);
router.delete("/books/:id", deleteBookById);

module.exports = router;
