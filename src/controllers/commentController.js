const Comment = require("../models/comment");

exports.createComment = async (req, res, next) => {
  try {
    const { postId, userEmail, body } = req.body;
    const newComment = new Comment(postId, userEmail, body);
    await newComment.save();
    res.status(201).json({ data: "new comment created" });
  } catch (error) {
    res.status(500).json({
      status: "faled!!!",
      messege: error,
    });
  }
};

exports.getAllcommentsByPostId = async (req, res, next) => {
  try {
    const comments = await Comment.findComments(req.body.postId);
    res.status(200).json({ data: comments[0] });
  } catch (error) {
    res.status(500).json({
      status: "faled!!!",
      messege: error,
    });
  }
};
