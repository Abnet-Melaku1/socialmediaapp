const jwt = require("jsonwebtoken");
const Post = require("../models/postsModels");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
//create post
const createPost = async (req, res) => {
  const post = await Post.create({
    user: req.user.id,
    desc: req.body.desc,
    img: req.body.img,
  });
  res.status(200).json(post);
};
//update post
const updatePost = asyncHandler(async (req, res) => {
  //check for the post
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  //check for the user
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }
  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  //check for the user
  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }
  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const deletedPost = await Post.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedPost);
});
module.exports = { createPost, updatePost, deletePost };
