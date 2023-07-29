const db = require("../configDB/db");

class Post {
  constructor(userId, title, body, userEmail) {
    (this.userId = userId),
      (this.title = title),
      (this.body = body),
      (this.userEmail = userEmail);
  }

  async save() {
    let sql = `
    INSERT INTO posts( userId,title,body,userEmail)
    VALUES("${this.userId}", "${this.title}", "${this.body}", "${this.userEmail}");`;
    return db.execute(sql);
  }

  static findPosts() {
    let sql = "SELECT * FROM posts";
    return db.execute(sql);
  }

  static deletePost(id, userId) {
    let sql = `
    DELETE FROM posts
    WHERE id = ${id} AND
    userId = ${userId};
    `;
    return db.execute(sql);
  }

  static updatePost(id, userId, title, body) {
    let sql = `UPDATE posts
    SET 
      title = "${title}", 
      body = "${body}"
    WHERE 
      id = ${id} AND
      userId = ${userId};`;
    return db.execute(sql);
  }
}

module.exports = Post;
