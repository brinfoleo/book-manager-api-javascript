const Book = require('../models/book');

const populateDummyData = async () => {
  // Populate environment with some dummy data in dev
  console.log('Populating database with dummy data');
  await Book.sync({ force: true });
  await Book.create({ bookId: 1, title: 'The Hobbit', author: 'J. R. R. Tolkien' });
};

module.exports = populateDummyData;
