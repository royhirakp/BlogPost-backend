const mysql2 = require("mysql2");

const pool2 = mysql2.createPool({
  host: "database-1.cngahhhyqgkh.eu-north-1.rds.amazonaws.com",
  //process.env.AWS_SQL_HOST,
  port: "3306",
  user: "admin",
  // process.env.USER,
  database: "my_db",
  // process.env.DB_NAME,
  password: "adminadmin",
  // process.env.DB_PASSWORD,
});

module.exports = pool2.promise();
