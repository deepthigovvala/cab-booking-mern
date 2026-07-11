const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("Authorization Header:", authHeader);

    if (!authHeader) {
      return res.status(401).json({
        message: "No Token",
      });
    }

    const token = authHeader.replace("Bearer ", "");

    console.log("Token:", token);
    console.log("JWT Secret:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT Error Name:", error.name);
    console.log("JWT Error Message:", error.message);

    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = { protect };