const jwt = require("jsonwebtoken");
const Post = require("../models/postsModels");
const User = require("../models/userModel");

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
//get a post
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("post not found.");
  } else {
    res.status(200).json(post);
  }
});
//get users post
const getUserPosts = async (req, res) => {
  try {
    const user = await user.findOne({ email: req.params.email });
    const posts = await Post.find({ user: req.user.id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
//get timeline posts
const getTimeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    const userPosts = await Post.find({ user: req.user.id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ user: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
};
//get user posts
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
//Delete post
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
//like or dislike post
const likeAndDislikePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (!post.likes.includes(req.user.id)) {
      await post.updateOne({ $push: { likes: req.user.id } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.user.id } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//comments
const comments = async (req, res) => {
  const post = await Post.findById(req.params.id);

  console.log(post);
  console.log(req.body);
  try {
    await post.updateOne({
      $push: {
        comments: { commentator: req.user.id, comment: req.body.comment },
      },
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
//saved posts
const savedPosts = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const user = await User.findById(req.user.id);

  try {
    if (!user.savedPosts.includes(post.id)) {
      await user.updateOne({ $push: { savedPosts: post.id } });
      res.status(200).json("post saved successfully.");
    } else {
      await user.updateOne({ $pull: { savedPosts: post.id } });
      res.status(200).json("post removed from saved posts.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createPost,
  updatePost,
  getPost,
  getUserPosts,
  likeAndDislikePost,
  getTimeline,
  deletePost,
  comments,
  savedPosts,
};
