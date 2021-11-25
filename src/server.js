const environment = process.env.NODE_ENV || 'dev';
require('dotenv').config({path: `./.env.${environment.trim()}`});

const app = require('./app');
const populateDummyData = require('./database/database_seed');

app.listen(process.env.APPLICATION_PORT, () => {
  console.log(`Express started on port ${process.env.APPLICATION_PORT}`);

  // Seed the database with some data
  if (environment === 'dev') {
    populateDummyData();
  }
});
