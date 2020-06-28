const { sequelize, Followers } = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const addSubscription = (req, res) => {
  const follower = req.body.profileId;
  const following = req.body.followingId;

  console.log(req.body);
  if (following) {
    Followers.create({ following, follower })
      // sequelize
      //   .query(
      //     `INSERT INTO followers (follower, following) VALUES ($followerUserId, $followingUserId)`,
      //     {
      //       bind: {
      //         followerUserId: follower,
      //         followingUserId: following,
      //       },
      //       type: QueryTypes.INSERT,
      //     }
      //   )
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { addSubscription };
