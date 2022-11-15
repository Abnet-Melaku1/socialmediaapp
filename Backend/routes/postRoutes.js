const express = require("express");
const router = express.Router();
const { createPosts } = require("../models/postsModels");

router.post("/", createPostts);
