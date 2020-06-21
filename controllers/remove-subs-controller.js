const { sequelize } = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const removeSubscription = (req, res) => {
  const followingUserId = req.body.followingId;
  const activeUserId = req.body.profileId;

  if (followingUserId) {
    sequelize
      .query(
        `DELETE FROM followers WHERE follower = $followerUserId AND following = $followingUserId`,
        {
          bind: {
            followerUserId: activeUserId,
            followingUserId: followingUserId,
          },
          type: QueryTypes.DELETE,
        }
      )
      .then((res) => {
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { removeSubscription };
