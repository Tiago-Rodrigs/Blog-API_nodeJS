require("dotenv").config();
const privateKey = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const refreshToken = req.headers.authorization;
  jwt.verify(refreshToken, privateKey, (err, decoded) => {
    if (decoded) {
      req.profileName = decoded.data.name;
      req.profileEmail = decoded.data.email;
      req.profileId = decoded.data.id;
      next();
    } else {
      res.status(401);
    }
  });
};

module.exports = checkToken;
