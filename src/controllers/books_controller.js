const { bookService } = require('../services');

const getBooks = async (req, res) => {
  const books = await bookService.getBooks();
  res.json(books).status(200);
};

const getBook = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await bookService.getBook(Number(bookId));

  if (book) {
    res.json(book).status(200);
  } else {
    res.status(404).json({ message: 'bookId not found, please check!' });
  }
};

const saveBook = async (req, res) => {
  const bookToBeSaved = req.body;
  const book = await bookService.getBook(Number(bookToBeSaved.bookId));
  if (book) {
    res.status(400).json({ message: 'Duplicate BookId! Please check' });
  } else {
    try {
      let nBook = await bookService.saveBook(bookToBeSaved);
      res.status(201).json(nBook);
    }
    catch (error) {
      res.status(400).json({ message: error.message });
      //https://github.com/AnilWijesinghe/book-manager-api-javascript/blob/main/src/controllers/books_controller.test.js
      // if (error.message===constants.BOOK_EXIST) res.status(409).json({message: error.message});
    }
  }

};
const deleteBook = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await bookService.deleteBook(Number(bookId));

  if (book) {
    res.json(book).status(200);
  } else {
    res.status(404).json('Not found');
  }

};
// User Story 4 - Update Book By Id Solution
const updateBook = async (req, res) => {
  const bookUpdateData = req.body;
  const bookId = req.params.bookId;
  const book = await bookService.updateBook(bookId, bookUpdateData);
  res.status(204).json(book);
};

module.exports = {
  getBooks,
  getBook,
  deleteBook,
  saveBook,
  updateBook, // User Story 4 - Update Book By Id Solution
};
