const { post } = require("../app");
const Post = require("../models/Post");

const postController = {};

postController.createPost = async (req, res, next) => {
  try {
    let { username, avatarUrl, caption, imageUrl, location } = req.body;
    let post = await Post.create({
      username,
      avatarUrl,
      caption,
      imageUrl,
      location
    });
    res.send({
      status: 200,
      data: post,
      message: "Post has been created successfully.",
    });
  } catch (err) {
    res.send({ status: 400, message: err.message });
  }
};

postController.getPost = async (req, res, next) => {
  try {
    const totalPosts = await Post.find();
    res.send({
      status: 200,
      data: totalPosts,
      message: "Post got successfully",
    });
  } catch (err) {
    res.send({ status: 400, message: err.message });
  }
};

module.exports = postController;
