const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const searchUsers = (req, res) => {
  const requiredUser = req.query.requiredUser;
  const activeUserId = req.query.activeUserId;

  sequelize
    .query(
      `SELECT users.name, users.id, followers.following FROM users LEFT JOIN followers ON users.id = followers.following WHERE name = $requiredUser AND users.id != $activeUserId`,
      {
        bind: {
          requiredUser: requiredUser,
          activeUserId: activeUserId,
        },
        type: QueryTypes.SELECT,
      }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
      res.json("User not found");
    });
};

module.exports = { searchUsers };
