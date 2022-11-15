const jwt = require("jsonwebtoken");
const Post = require("../models/postsModels");
const bcrypt = require("bcryptjs");

const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { createPost };
