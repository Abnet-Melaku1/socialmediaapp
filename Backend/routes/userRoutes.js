const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { protect } = require("../middlewares/authMiddleWare");
const { deleteUser, updateUser } = require("../controllers/userController");

//update user

router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);
module.exports = router;
