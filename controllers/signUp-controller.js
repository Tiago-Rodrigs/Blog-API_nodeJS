const tokenService = require("../services/tokenCreator");
const createHash = require("../services/createHash");
const { Users } = require("../config/sequelize");

const createUser = (req, res) => {
  const data = req.body;
  data.password = createHash(data.password);
  const refreshToken = tokenService.refreshToken(data.name, data.email);
  data.refresh_token = refreshToken;

  Users.create({ ...data })
    .then((data) => {
      const accessToken = tokenService.accessToken(data.name, data.email);
      res.status(201).json({
        name: data.name,
        email: data.email,
        id: data.id,
        accessToken,
        refreshToken,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json("Email is not unique");
    });
};

module.exports = { createUser };
