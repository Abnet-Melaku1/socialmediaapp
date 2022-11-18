const Post = require("../models/userModel");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
//update user

//_id is the post id and user is the user id

const updateUser = async (req, res) => {
  if (req.user.id === req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json("account has been updated.");
    } catch (err) {
      return res.status(500).json(err);
    }
    return res.status(403).json("unauthorized user.");
  }
};
//const deleter user

const deleteUser = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("user deleted successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json("unauthorized user.");
  }
};
module.exports = { deleteUser, updateUser };
