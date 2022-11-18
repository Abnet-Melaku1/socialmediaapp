const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleWare");
const {
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.post("/", protect, createPost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);
module.exports = router;
