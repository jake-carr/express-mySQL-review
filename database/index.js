const mysql = require('mysql');

module.exports = mysql.createConnection({
  user: 'root',
  password: 'mysqlpassword',
  database: 'gamesDB',
 });