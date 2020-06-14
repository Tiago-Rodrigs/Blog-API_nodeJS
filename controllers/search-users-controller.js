const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const searchUsers = (req, res) => {
  const requiredUser = req.query.requiredUser;
  const profileId = req.query.profileId;

  sequelize
    .query(
      `SELECT users.name, users.id, CAST((CAST(followes.following AS CHARACTER)) AS BOOLEAN)
      FROM users LEFT JOIN followes
      ON users.id = followes.following AND followes.follower = :profileId
      WHERE users.name ILIKE :requiredUser AND users.id != :profileId`,
      {
        replacements: {
          requiredUser: `%${requiredUser}%`,
          profileId,
        },
        type: QueryTypes.SELECT,
      }
    )
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      res.json("User not found");
    });
};

module.exports = { searchUsers };
