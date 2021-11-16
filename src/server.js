const environment = process.env.NODE_ENV || 'dev';
const app = require('./app');
const populateDummyData = require('./database/database_seed');

app.listen(3000, () => {
  console.log('Express started on port 3000');

  // Seed the database with some data
  if (environment === 'dev') {
    populateDummyData();
  }
});
