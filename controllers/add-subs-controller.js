const { Followers } = require("../config/sequelize");

const addSubscription = (req, res) => {
  const follower = req.body.profileId;
  const following = req.body.followingId;

  if (following) {
    Followers.create({ following, follower })
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

module.exports = { addSubscription };
