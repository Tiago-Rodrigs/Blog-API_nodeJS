const { Followers } = require("../config/sequelize");

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
      .then((res) => {
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { removeSubscription };
