const jwt = require("jsonwebtoken");
const config = require("config");

// Provides the middlewares used in all the routes to verify the user using JWT
module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    // If token not valid
    res.status(401).json({ msg: "Token is not valid" });
  }
};
