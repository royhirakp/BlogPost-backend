const mysql2 = require("mysql2");

const pool2 = mysql2.createPool({
  host: process.env.AWS_SQL_HOST,
  port: "3306",
  user: process.env.USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

module.exports = pool2.promise();
