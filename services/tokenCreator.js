require("dotenv").config();
const privateKey = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const accessToken = (name, email) => {
  return jwt.sign({ expiresIn: "1 days", data: { name, email } }, privateKey);
};

const refreshToken = (name, email) => {
  return jwt.sign({ expiresIn: "365 days", data: { name, email } }, privateKey);
};

module.exports = { accessToken, refreshToken };
