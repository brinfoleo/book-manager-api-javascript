const Sequelize = require('sequelize');

// TODO: This should be external config
const sequelize = new Sequelize(process.env.DB_NAME);

module.exports = sequelize;
