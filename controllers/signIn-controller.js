const tokenService = require("../services/tokenCreator");
const checkHash = require("../services/checkHash");
const userService = require("../services/user-service");

const signInUser = async (req, res) => {
  const user = req.body;
  try {
    const data = await userService.authUser(user);
    const userDB = data[0];
    if (!userDB) {
      res.status(401).send("invalid email or password");
    } else {
      const isHash = checkHash(user.password, userDB.password);
      if (isHash) {
        const access_token = tokenService.accessToken(userDB.name, userDB.email);
        const refresh_token = tokenService.refreshToken(
          userDB.name,
          userDB.email
        );
        const activeUser = { name: userDB.name, email: userDB.email, id: userDB.id, access_token, refresh_token };
        res.json(activeUser);
      } else {
        res.status(401).send("invalid email or password");
      }
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { signInUser };
