const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");

router.route("/:postId").get(commentController.getAllcommentsByPostId);
router.route("/").post(commentController.createComment);

module.exports = router;
