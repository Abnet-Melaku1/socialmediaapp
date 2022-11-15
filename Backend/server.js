const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const user = require("./routes/authRoutes");
const connectDb = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use("/api/users", user);
app.listen(port, () => {
  console.log(`app started on server ${port}`);
});
connectDb();
