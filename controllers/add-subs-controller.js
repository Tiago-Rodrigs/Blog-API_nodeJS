const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const addSubscription = (req, res, next) => {
  const followingUserId = req.query.followingId;
  const activeUserId = req.query.activeUserId;

  if (followingUserId) {
    sequelize
      .query(
        `INSERT INTO followers (follower, following) VALUES ($followerUserId, $followingUserId)`,
        {
          bind: {
            followerUserId: activeUserId,
            followingUserId: followingUserId,
          },
          type: QueryTypes.INSERT,
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

module.exports = { addSubscription };
