const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const searchUsers = (req, res) => {
  const requiredUser = req.query.requiredUser;
  const profileId = req.query.profileId;

  sequelize
    .query(
      `SELECT users.name, users.id, followes.follower, followes.following 
      FROM users LEFT JOIN followes 
      ON users.id = followes.following AND followes.follower = $profileId 
      OR users.id = followes.following and followes.follower IS null 
      WHERE users.name = $requiredUser AND users.id != $profileId`,
      {
        bind: {
          requiredUser: requiredUser,
          profileId: profileId,
        },
        type: QueryTypes.SELECT,
      }
    )
    .then((users) => {
      console.log(users);
      res.send(users);
    })
    .catch(() => {
      res.json("User not found");
    });
};

module.exports = { searchUsers };
