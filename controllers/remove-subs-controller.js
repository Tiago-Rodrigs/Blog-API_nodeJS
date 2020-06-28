const { sequelize, Followers } = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const removeSubscription = (req, res) => {
  const following = req.body.followingId;
  const follower = req.body.profileId;

  if (following) {
    Followers.destroy({
      where: {
        follower,
        following,
      },
    })
      // sequelize
      //   .query(
      //     `DELETE FROM followers WHERE follower = $follower AND following = $following`,
      //     {
      //       bind: {
      //         follower,
      //         following,
      //       },
      //       type: QueryTypes.DELETE,
      //     }
      //   )
      .then((res) => {
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { removeSubscription };
