// require("dotenv").config();

// const mysql = require("mysql");
const mysql2 = require("mysql2");

// require("dotenv").config();

// console.log("database ", process.env.USER);
// const pool = mysql.createConnection({
//   host: "database-1.cngahhhyqgkh.eu-north-1.rds.amazonaws.com", //process.env.AWS_SQL_HOST,
//   port: "3306",
//   user: "admin", //process.env.USER,
//   database: "my_db", //process.env.DB_NAME,
//   password: "adminadmin", //process.env.DB_PASSWORD,
// });

//***************************************************** */
const pool2 = mysql2.createPool({
  host: "database-1.cngahhhyqgkh.eu-north-1.rds.amazonaws.com", //process.env.AWS_SQL_HOST,
  port: "3306",
  user: "admin", //process.env.USER,
  database: "my_db", //process.env.DB_NAME,
  password: "adminadmin", //process.env.DB_PASSWORD,
});

// let sql = "SELECT * FROM users";
// pool2.execute(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

module.exports = pool2.promise();
