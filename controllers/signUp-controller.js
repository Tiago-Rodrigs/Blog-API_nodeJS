const tokenService = require("../services/tokenCreator.js");
const createHash = require("../services/createHash");
const userService = require("../services/user-service");
// const validate = require("../services/validator");

const createUser = async (req, res) => {

  const data = req.body;
  data.password = createHash(data.password);
  const refreshToken = tokenService.refreshToken(data.name, data.email);
  data.refresh_token = refreshToken;

  try {
    const result = await userService.registerUser(data);
    const accessToken = tokenService.accessToken(data.name, data.email);
    res.status(201).json({
      name: data.name,
      email: data.email,
      id: result[0][0].id,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json("Email is not unique");
  }
};

module.exports = { createUser };
