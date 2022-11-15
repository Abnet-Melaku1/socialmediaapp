const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add your name."],
    },
    email: {
      type: String,
      required: [true, "please add an email."],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "please add your password."],
    },
    profilepicture: {
      type: String,
      default: "",
    },
    coverpicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },

    bio: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: String,
      enum: [1, 2, 3],
    },
  },
  { timestapms: true }
);
module.exports = mongoose.model("User", userSchema);
