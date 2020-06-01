const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const removeSubscription = (req, res, next) => {
  const followingUserId = req.query.followingId;
  const activeUserId = req.query.activeUserId;
  const statusSubsBtn = req.query.status;

  if (followingUserId && statusSubsBtn) {
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
  } else {
    next();
  }
};

module.exports = { removeSubscription };
