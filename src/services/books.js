const Book = require('../models/book');

const getBooks = async () => {
  return Book.findAll();
};

const getBook = async (bookId) => {
  return Book.findOne({
    where: { bookId }
  });
};

const deleteBook = async (bookId) => {
  return Book.destroy({
    where: { bookId }
  });
};

const saveBook = async (book) => {
  return await Book.create(book);
};

// User Story 4 - Update Book By Id Solution
const updateBook = async (bookId, book) => {
  return Book.update(book, {
    where: {
      bookId,
    },
  });
};

module.exports = {
  getBooks,
  getBook,
  deleteBook,
  saveBook,
  updateBook, // User Story 4 - Update Book By Id Solution
};
