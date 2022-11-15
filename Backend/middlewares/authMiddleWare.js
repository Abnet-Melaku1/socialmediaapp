const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      //Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRETE);
      //Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};
module.exports = { protect };
