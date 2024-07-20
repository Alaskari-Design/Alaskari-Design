const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

// Load environment variables from server/.env
dotenv.config({ path: './server/.env' });

const dbConfig = {
  dialect: process.env.MYSQL_DIALECT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
