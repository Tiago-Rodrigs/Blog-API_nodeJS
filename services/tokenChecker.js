require("dotenv").config();
const privateKey = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const accessToken = req.headers.authorization;
  jwt.verify(accessToken, privateKey, (err, decoded) => {
    if (decoded) {
      req.profileName = decoded.data.name;
      req.profileEmail = decoded.data.email;
      req.profileId = decoded.data.id;
      next();
    } else {
      res.status(401).send();
    }
  });
};

module.exports = checkToken;
