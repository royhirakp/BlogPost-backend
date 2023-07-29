const db = require("../configDB/db");

class Comment {
  // from here start
  constructor(postId, userEmail, body) {
    (this.postId = postId), (this.body = body), (this.userEmail = userEmail);
  }

  async save() {
    let sql = `
    INSERT INTO comments (postId, userEmail, body)
    VALUES("${this.postId}", "${this.userEmail}", "${this.body}");`;
    return db.execute(sql);
  }

  static findComments(postId) {
    let sql = `SELECT * FROM comments WHERE postId = ${postId}`;
    return db.execute(sql);
  }
}

module.exports = Comment;
