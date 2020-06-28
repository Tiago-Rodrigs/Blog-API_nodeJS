const tokenService = require("../services/tokenCreator");
const checkHash = require("../services/checkHash");
const { Users } = require("../config/sequelize");

const signInUser = async (req, res) => {
  const user = req.body;
  Users.findAll({
    where: {
      email: user.email,
    },
  })
    .then((data) => {
      const userDB = data[0];
      if (!userDB) {
        res.status(401).send("invalid email or password");
      } else {
        const isHash = checkHash(user.password, userDB.password);
        if (isHash) {
          const access_token = tokenService.accessToken(
            userDB.name,
            userDB.email
          );
          const refresh_token = tokenService.refreshToken(
            userDB.name,
            userDB.email
          );
          const activeUser = {
            name: userDB.name,
            email: userDB.email,
            id: userDB.id,
            access_token,
            refresh_token,
          };
          res.json(activeUser);
        } else {
          res.status(401).send("invalid email or password");
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = { signInUser };
