const Post = require("../models/posts");

exports.createPost = async (req, res, next) => {
  try {
    const { title, body, userEmail } = req.body;
    const userId = req.userId;
    const newPost = new Post(userId, title, body, userEmail);
    await newPost.save();
    res.status(201).json({ data: "new post created" });
  } catch (error) {
    res.status(500).json({
      status: "faled!!!",
      messege: error,
    });
  }
};

exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.findPosts();
    res.status(200).json({ posts: posts[0] });
  } catch (error) {
    res.status(500).json({
      status: "faled!!!",
      messege: error,
    });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id, title, body } = req.body;
    const userId = req.userId;
    // check req.body.title == Post.title?
    // then update the titel or body
    const result = await Post.updatePost(id, userId, title, body);
    if (result[0].affectedRows == 0) {
      res.status(404).json({
        status: "Not found",
        message: "Unable to update! Please provide a valid id and userId.",
      });
      return;
    }
    res.status(200).json({ result });
    return;
  } catch (error) {
    res.status(500).json({
      status: "faled!!!",
      messege: error,
    });
  }
};

exports.deletePostByid = async (req, res, next) => {
  console.log(req.body);
  try {
    const { id } = req.body;
    const userId = req.userId;
    console.log(req.body, "userId: ", userId);
    let result = await Post.deletePost(id, userId);
    if (result[0].affectedRows == 0) {
      res.status(404).json({
        status: "404 !!!!!!! Not found",
        message: "Unable to delete! Please provide a valid id and userId.",
      });
      return;
    }
    res.status(200).json({
      working: "wpr",
      result,
    });
    return;
  } catch (error) {
    res.status(500).json({
      status: "faled!!!",
      messege: error,
    });
  }
};

// exports.getPostById = async (req, res, next) => {
//   res.send({ d: "515222563" });
// };
