const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const addSubscription = (req, res) => {
  const followingUserId = req.body.followingId;
  const activeUserId = req.body.profileId;

  if (followingUserId) {
    sequelize
      .query(
        `INSERT INTO followes (follower, following) VALUES ($followerUserId, $followingUserId)`,
        {
          bind: {
            followerUserId: activeUserId,
            followingUserId: followingUserId,
          },
          type: QueryTypes.INSERT,
        }
      )
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { addSubscription };
