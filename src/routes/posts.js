const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createPost)
  .put(postController.updatePost)
  .delete(postController.deletePostByid);

// router.route("/:id").get(postController.getPostById);
module.exports = router;
