const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  //Check if user inserts all the credentials to register
  if (!name || !email || !password) {
    res.status(400).json("Insert all the necessary informations.");
  }
  //Check if ther user exists
  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    res.status(400).json("user already exists.");
    //Hash the password
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400).json("Invalid user data entered.");
  }
};
//Login user

const logInUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isPassword = await bcrypt.compare(password, user.password);
  try {
    if (user && isPassword) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(404).json("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//get me
const getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  const { _id, name, email } = user;

  res.status(200).json({
    id: _id,
    name,
    email,
  });
};
//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRETE, {
    expiresIn: "30d",
  });
};
module.exports = { registerUser, logInUser, getMe };
