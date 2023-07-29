const db = require("../configDB/db");

class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  async save() {
    let sql = `
            INSERT INTO users(
                email,
                password
            )
            VALUES(
                '${this.email}',
                '${this.password}'
            )
        `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM users";
    return db.execute(sql);
  }

  static findByEmail(email) {
    let sql = `SELECT * FROM users WHERE email = '${email}'`;
    return db.execute(sql);
  }
}

module.exports = User;
