const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");

router
  .route("/")
  .get(commentController.getAllcommentsByPostId)
  .post(commentController.createComment);

module.exports = router;
